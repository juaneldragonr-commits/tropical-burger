import CartSummary from '@/components/CartSummary';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-6xl font-extrabold text-burger-brown mb-6">
          Sabor Tropical en cada bocado
        </h1>
        <p className="text-xl text-burger-brown/80 max-w-2xl mb-8">
          Hamburguesas gourmet hechas con ingredientes frescos, piña asada y el toque secreto que nos hace únicos.
        </p>
        <button className="bg-tropical-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
          Ver Menú
        </button>
      </section>

      {/* Menu Section */}
      <MenuSection />
      <Footer />
      <CartSummary />
    </main>
  );
}