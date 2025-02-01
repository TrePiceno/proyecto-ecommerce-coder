"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import logo from "../../../public/images/Logo.png";
import Link from "next/link";
import { CartContext } from "../../context/cartContext";
import { ShoppingCart } from "lucide-react"; // Ícono de carrito

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const { cart } = useContext(CartContext); // Acceder al carrito

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="bg-white content-center h-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src={logo} alt="logo" width={125} height="auto" priority />
              </div>
            </div>

            {/* Menú de navegación */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <Link
                  href="/"
                  className="font-semibold text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg p-2"
                >
                  Inicio
                </Link>
                <Link
                  href="/productos"
                  className="font-semibold text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg p-2"
                >
                  Productos
                </Link>
                <Link
                  href="/contacto"
                  className="font-semibold text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg p-2"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Widget del carrito */}
            <div className="flex items-center space-x-4">
              <Link href="/checkout" className="relative">
                <ShoppingCart className="w-8 h-8 text-orange-500 hover:text-orange-700 transition-all" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Menú Hamburguesa en móviles */}
              <div className="md:hidden flex items-center">
                <button
                  className="p-2 rounded-md text-orange-500 hover:text-orange-700 focus:outline-none"
                  onClick={() => setIsClick(!isClick)}
                >
                  {isClick ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable en móviles */}
        {isClick && (
          <div className="md:hidden absolute top-32 left-0 w-full bg-white z-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="font-semibold text-2xl text-orange-500 block hover:bg-orange-500 hover:text-white rounded-lg p-2"
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="font-semibold text-2xl text-orange-500 block hover:bg-orange-500 hover:text-white rounded-lg p-2"
              >
                Productos
              </Link>
              <Link
                href="/contacto"
                className="font-semibold text-2xl text-orange-500 block hover:bg-orange-500 hover:text-white rounded-lg p-2"
              >
                Contacto
              </Link>
              {/* Ícono del carrito en móviles */}
              <Link
                href="/checkout"
                className="font-semibold text-2xl flex items-center text-orange-500 block hover:bg-orange-500 hover:text-white rounded-lg p-2"
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Carrito {totalItems > 0 && <span className="ml-1">({totalItems})</span>}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
