import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-cream-white text-burger-brown shadow-sm">
      <div className="text-2xl font-bold tracking-tight">Tropical Burger</div>
      <div className="flex items-center space-x-6 font-medium">
        <a href="#menu" className="hover:text-tropical-orange transition-colors">Menú</a>
        <a href="#" className="bg-tropical-orange text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-colors">
          Ordenar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;