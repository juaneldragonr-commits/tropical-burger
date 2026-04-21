'use client';
import { useCart } from '../context/CartContext';

const CartSummary = () => {
  const { cart } = useCart();

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-burger-brown text-white p-6 rounded-2xl shadow-xl w-80 z-50">
      <h3 className="font-bold text-lg mb-4">Tu Pedido</h3>
      <ul className="space-y-2 mb-4">
        {cart.map((item: any, index: number) => (
          <li key={index} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-tropical-orange text-white py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CartSummary;