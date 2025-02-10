import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-6 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-700">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-gray-700">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-gray-700">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Síguenos</h3>
            <div className="mt-2 flex flex-col space-y-2 justify-center md:justify-start">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Contacto</h3>
            <p className="mt-2">123 Calle Ficticia, Ciudad, País</p>
            <p className="mt-2">Teléfono: +123 456 7890</p>
            <p className="mt-2">Email: info@misitioweb.com</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Ubicación</h3>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353153169!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6d4f1a1e7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633079871234!5m2!1sen!2sau"
                width="300"
                height="200"
                title="Mapa de la úbiación"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 text-white text-center py-6 mt-12  translate-y-6">
        &copy; 2025 Mi Sitio Web. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
