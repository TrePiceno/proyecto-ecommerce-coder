"use client";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
    const { cart, getTotalPrice, clearCart, removeFromCart, savePurchase } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handlePurchase = async () => {
        if (!nombre || !direccion) {
            setMessage("Por favor completa todos los campos.");
            return;
        }

        setLoading(true);
        const success = await savePurchase({ nombre, direccion });

        if (success) {
            setMessage("¡Compra realizada con éxito! 🎉");
            router.push("/thank-you");
            clearCart();
        } else {
            setMessage("Hubo un error al procesar la compra.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Checkout</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">No hay productos en el carrito.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white p-4 md:p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg md:text-xl font-bold mb-4">Resumen del carrito</h2>
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row items-center border-b py-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 relative">
                                        <Image src={item.imageUrl} alt={item.title} fill className="rounded-lg object-contain" />
                                    </div>
                                    <div className="ml-4 flex-1 text-center md:text-left">
                                        <h2 className="text-base md:text-lg font-bold">{item.title}</h2>
                                        <p>Precio: ${item.price}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p className="font-semibold">Subtotal: ${item.price * item.quantity}</p>
                                    </div>
                                    <button
                                        className="mt-2 md:mt-0 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all text-sm md:text-base"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg md:text-xl font-bold mb-4">Información de Envío</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                    placeholder="Tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Dirección</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                    placeholder="Tu dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                            </div>
                            <p className="text-lg md:text-xl font-semibold text-blue-600">Total: ${getTotalPrice()}</p>
                            <button
                                onClick={handlePurchase}
                                className="mt-4 w-full bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold disabled:bg-gray-400 text-sm md:text-base"
                                disabled={loading}
                            >
                                {loading ? "Procesando..." : "Confirmar Compra"}
                            </button>
                            {message && <p className="text-center text-red-500 mt-4">{message}</p>}
                        </div>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <Link href="/productos" className="text-blue-500 hover:underline">
                        ← Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;


