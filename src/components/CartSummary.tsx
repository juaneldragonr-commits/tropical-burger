'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const CartSummary = () => {
  const { cart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  if (cart.length === 0) return null;

  if (isCheckout) {
    return (
      <div className="fixed bottom-6 right-6 bg-white p-6 rounded-3xl shadow-2xl w-80 z-50 border border-gray-100 animate-in slide-in-from-bottom-10">
        <h3 className="font-bold text-xl mb-5 text-burger-brown">Datos de Envío 🛵</h3>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Nombre completo" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-orange focus:ring-2 focus:ring-tropical-orange/20 transition-all outline-none" 
          />
          <input 
            type="text" 
            placeholder="Dirección de entrega" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropical-orange focus:ring-2 focus:ring-tropical-orange/20 transition-all outline-none" 
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => setIsCheckout(false)}
            className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            Atrás
          </button>
          <button 
            onClick={() => alert('¡Pedido enviado con éxito! 🍔')}
            className="flex-[2] bg-gradient-to-r from-tropical-orange to-orange-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all"
          >
            Confirmar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-burger-brown text-white p-6 rounded-3xl shadow-2xl w-80 z-50 transition-all">
      <h3 className="font-bold text-lg mb-4 flex justify-between items-center">
        Tu Pedido 🍔
        <span className="bg-tropical-orange text-xs px-2 py-1 rounded-full">{cart.length}</span>
      </h3>
      <ul className="space-y-3 mb-6">
        {cart.map((item: any, index: number) => (
          <li key={index} className="flex justify-between text-sm border-b border-white/10 pb-2">
            <span>{item.name}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => setIsCheckout(true)}
        className="w-full bg-tropical-orange text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all hover:shadow-lg active:scale-95"
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CartSummary;