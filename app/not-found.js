import React from "react";
import Link from "next/link";
import Image from "next/image";
import error404 from "../public/images/error404.gif"

const Custom404 = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-12 h-screen">
      <div>
        <h1 className="text-2xl text-gray-600 mb-8">Página no encontrada</h1>
      </div>
      <Image
        src={error404}
        width={700}
        height={700}
        alt="404"
        className="mix-blend-multiply brightness-110"
      />
      <Link
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 "
      >
        volver al inicio
      </Link>
    </div>
  );
};

export default Custom404;