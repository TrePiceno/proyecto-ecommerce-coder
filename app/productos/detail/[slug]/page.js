"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LoadingUI from "@/app/components/LoadingUI/page";

const ProductoDetalle = () => {
    const { slug } = useParams();
    const { getProducts, addToCart } = useContext(CartContext);
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await getProducts();
                const foundProduct = allProducts.find((product) => product.slug === slug);
                setProducto(foundProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [getProducts, slug]);

    if (!producto) return <LoadingUI/>

    // Función para modificar cantidad respetando el stock
    const handleCantidadChange = (delta) => {
        setCantidad((prev) => {
            const nuevaCantidad = prev + delta;
            if (nuevaCantidad < 1) return 1; // Mínimo 1 unidad
            if (nuevaCantidad > producto.stock) return producto.stock; // Máximo stock disponible
            return nuevaCantidad;
        });
    };

    // Agregar al carrito con cantidad seleccionada
    const handleAddToCart = () => {
        addToCart({ ...producto, quantity: cantidad });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-6">

                <Link href="/productos" className="text-blue-500 hover:underline flex items-center mb-4">
                    ← Volver a Productos
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-lg shadow-lg">

                    <div className="relative w-full h-96">
                        <Image
                            src={producto.imageUrl}
                            alt={producto.title}
                            fill
                            sizes="100%"
                            style={{ objectFit: "contain" }}
                            className="rounded-lg"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">{producto.title}</h1>
                        <p className="text-gray-600 mt-2">{producto.description}</p>
                        <p className="text-2xl font-semibold mt-4 text-blue-600">${producto.price}</p>
                        <p className="mt-2 text-gray-500">Categoría: <span className="font-medium">{producto.category}</span></p>
                        <p className="mt-2 text-gray-500">Stock disponible: <span className="font-medium">{producto.stock}</span></p>

                        {/* Contador de cantidad */}
                        <div className="flex items-center mt-4">
                            <button
                                className="px-3 py-1 bg-gray-300 rounded-l-md hover:bg-gray-400 transition-all"
                                onClick={() => handleCantidadChange(-1)}
                            >−</button>
                            <span className="px-4 py-2 bg-white border">{cantidad}</span>
                            <button
                                className="px-3 py-1 bg-gray-300 rounded-r-md hover:bg-gray-400 transition-all"
                                onClick={() => handleCantidadChange(1)}
                            >+</button>
                        </div>

                        {/* Botón de agregar al carrito */}
                        <button
                            onClick={handleAddToCart}
                            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Agregar {cantidad} al carrito 🛒
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;