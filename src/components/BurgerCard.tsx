'use client';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface BurgerProps {
  name: string;
  description: string;
  price: string;
}

const BurgerCard = ({ name, description, price }: BurgerProps) => {
  const { addToCart } = useCart();
  // Estado local para animación visual en el botón
  const [isAdding, setIsAdding] = useState(false);

  const handleOrder = () => {
    // 1. Agregamos al carrito real (esto actualiza el contador global)
    addToCart({ name, description, price });
    
    // 2. Quitamos el alert! Ya no lo necesitamos.

    // 3. Pequeño efecto visual en el botón
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 500); // Volver al estado normal tras 0.5s
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-burger-brown/10 hover:shadow-xl transition-all flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-burger-brown mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold text-tropical-orange text-lg">{price}</span>
        <button 
          onClick={handleOrder}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isAdding 
              ? 'bg-orange-600 scale-95 shadow-inner' // Estado de "agregado"
              : 'bg-burger-brown hover:bg-orange-700 hover:scale-105' // Estado normal
          } text-white`}
        >
          {isAdding ? '¡Agregado! 🍔' : 'Pedir'}
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;