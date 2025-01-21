'use client'
import Link from 'next/link';
import Slider from './Slider'

const Hero = () => {

  return (
    <>
      <div className="bg-orange-400 text-white py-20 h-dvh content-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a mi tienda online
          </h1> 
          <p className="text-lg md:text-2xl mb-8">
            Aquí encontraras el equipo que necesitas para trabajo, escuela o videojuegos.
          </p>
          <Link href="/productos" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
            Ir a productos
          </Link>
        </div>
      </div>
      <Slider />
    </>
  );
}

export default Hero