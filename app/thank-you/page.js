"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            router.push("/productos");
        }, 10000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <h1 className="text-3xl font-bold text-green-600">¡Gracias por tu compra! 🎉</h1>
            <p className="mt-4 text-gray-600">Tu pedido ha sido procesado con éxito.</p>
            <p className="text-gray-600">En breve recibirás un correo con los detalles de tu compra.</p>

            <Link href="/productos" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
                Seguir comprando
            </Link>

            <p className="mt-3 text-gray-500">Serás redirigido automáticamente en <span className="font-bold">{countdown}</span> segundos...</p>
        </div>
    );
};

export default ThankYouPage;