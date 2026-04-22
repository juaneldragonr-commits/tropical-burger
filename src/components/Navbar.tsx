'use client';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="font-bold text-2xl text-burger-brown">Tropical Burger</div>
        
        <div className="flex items-center gap-6">
          <a href="#menu" className="text-gray-600 hover:text-tropical-orange transition-colors">Menú</a>
          
          <div className="relative">
            <button className="flex items-center gap-2 bg-burger-brown text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Ordenar</span>
            </button>
            
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-tropical-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;