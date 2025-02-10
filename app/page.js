import Hero from "./layout/hero/Hero";
import Header from "./layout/header/Header";
import Slider from "./layout/slider/Slider";

export const metadata = {
  title: "Inicio | Mi E-commerce",
  description: "Descubre los mejores productos al mejor precio. Compra fácil, rápido y seguro.",
  keywords: "compras, ecommerce, ofertas, tienda online, productos",
  openGraph: {
    title: "Mi E-commerce - Tu tienda online",
    description: "Explora nuestra amplia gama de productos con ofertas exclusivas.",
    url: "https://proyecto-ecommerce-coder.vercel.app/",
    siteName: "Mi E-commerce",
    images: [
      {
        url: "../public/images/imgopengraph.png",
        width: 1200,
        height: 630,
        alt: "Banner de Mi E-commerce",
      },
    ],
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <Slider/>
      <Header />
    </>
  );
}
