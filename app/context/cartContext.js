"use client";
import { createContext, useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Referencia a la colección de productos en Firebase
    const collectionRef = collection(db, "productos");

    // Obtener productos desde Firebase
    const getProducts = async () => {
        const snapshot = await getDocs(collectionRef);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    // Agregar producto al carrito (sin duplicar)
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity } // Sumar cantidad seleccionada
                        : item
                );
            } else {
                return [...prevCart, { ...product }]; // Agregar nuevo producto con cantidad seleccionada
            }
        });
    };


    // Remover un producto del carrito
    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Obtener el total del carrito
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Guardar compra en Firebase
    const savePurchase = async (userData) => {
        try {
            const orderRef = collection(db, "orders");
            await addDoc(orderRef, {
                user: userData,
                items: cart,
                total: getTotalPrice(),
                date: new Date(),
            });
            clearCart();
            return true;
        } catch (error) {
            console.error("Error al guardar la compra:", error);
            return false;
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getProducts, getTotalPrice, savePurchase }}>
            {children}
        </CartContext.Provider>
    );
};
