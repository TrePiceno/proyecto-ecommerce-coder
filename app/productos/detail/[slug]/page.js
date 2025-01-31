"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProductoDetalle = () => {
    const { slug } = useParams();
    const { getProducts } = useContext(CartContext);
    const [producto, setProducto] = useState(null);

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

    if (!producto) return <p className="text-center text-gray-500">Cargando...</p>;


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

                        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
                            Agregar al carrito 🛒
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;
