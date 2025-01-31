'use client'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";
import Link from "next/link";

const categorias = ["Todos", "Gamer", "Clásica"];

const Productos = () => {

  const { getProducts } = useContext(CartContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        setProductos(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } 
    };

    fetchProducts();
  }, [getProducts]);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const handleCategoriaChange = (category) => {
    setCategoriaSeleccionada(category);
  };

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter(
          (producto) => producto.category === categoriaSeleccionada
        );

  // cargar productos del mock a firebase
  // const cargarProductosColeccion = () => {
  //   productos.forEach((producto) => {
  //     addDoc(collection(db, "productos"), producto)
  //   });
  //   console.log("Productos cargados");
  // };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Nuestros Productos
        </h1>

        {/* Botón para cargar productos a Firebase */}
        {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700" onClick={cargarProductosColeccion}>Cargar productos a FireBase</button> */}

        {/* Barra de categoria seleccionada */}
        <div className="flex justify-center mb-8">
          {categorias.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoriaChange(category)}
              className={`mx-2 px-4 py-2 rounded-lg ${
                categoriaSeleccionada === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-700 focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Map de productos por categoria, sino hay categoria muestra todos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl"
            >
              <Link href={`/productos/detail/${producto.slug}`}>
                <div className="relative w-full h-96">
                  <Image
                    src={producto.imageUrl}
                    alt={producto.title}
                    fill
                    sizes="100%"
                    style={{ objectFit: "contain" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold">{producto.title}</h2>
                  <p className="mt-2 text-gray-600">{producto.description}</p>
                  <p className="mt-4 text-lg font-semibold">${producto.price}</p>
                  <p className="mt-4 text-base font-medieum">{producto.category}</p>

                  {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Ir a detalle
                    </button> */}
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Productos;
