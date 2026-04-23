'use client';
import { useRef } from 'react';
import CartSummary from '@/components/CartSummary';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Home() {
  // Creamos la referencia para el scroll
  const menuRef = useRef<HTMLDivElement>(null);

  // Función para desplazar suavemente al menú
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-cream-white pt-24">
      {/* Pasamos la función al Navbar */}
      <Navbar onScrollToMenu={scrollToMenu} />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-10 pb-15 px-4 text-center">
        <h1 className="text-6xl font-extrabold text-burger-brown mb-6">
          Tropical flavor in every bite
        </h1>
        <p className="text-xl text-burger-brown/80 max-w-2xl mb-8">
          Gourmet burgers made with fresh ingredients, grilled pineapple and the secret touch that makes us unique.
        </p>
        <button 
          onClick={scrollToMenu}
          className="bg-tropical-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          View Menu
        </button>
      </section>

      {/* Contenedor principal: Flexbox para alinear Menú y Pedido */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 py-10">
        
        {/* Columna izquierda: Menu (Asignamos la referencia aquí) */}
        <div ref={menuRef} className="flex-1">
          <MenuSection />
        </div>

        {/* Columna derecha: Your Order (Sidebar) */}
        <aside className="lg:w-80 w-full flex-shrink-0">
          <div className="lg:sticky lg:top-28">
            <CartSummary />
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}