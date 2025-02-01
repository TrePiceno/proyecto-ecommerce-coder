'use client'
import { useState } from "react";
import Image from "next/image";
import usuaria from "../../../public/images/usuaria.jpg";
import oficinistas from "../../../public/images/oficinistas.jpg";
import zapatero from "../../../public/images/zapatero.jpg";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    usuaria,
    oficinistas,
    zapatero,
    usuaria,
    oficinistas,
    zapatero,
  ];

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-screen">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style = {{objectFit: "cover"}}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
