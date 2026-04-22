'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const CartSummary = () => {
  // Ajuste: Consumimos isCartVisible y setIsCartVisible del contexto
  const { cart, removeItem, clearCart, isCartVisible, setIsCartVisible } = useCart(); 
  
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({ name: false, address: false });

  // Función para convertir "$15.000" a número 15000
  const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, ''));
  const total = cart.reduce((acc, item) => acc + parsePrice(item.price), 0);

  // --- LÓGICA DE VISIBILIDAD ---
  // Si el carrito no debe ser visible, o si está vacío y no estamos en confirmación, no renderizamos nada
  if (!isCartVisible || (cart.length === 0 && !isOrderConfirmed)) return null;

  // --- LÓGICA DE VALIDACIÓN ---
  const handleConfirmOrder = () => {
    const newErrors = {
      name: name.trim().length < 3,
      address: address.trim().length < 5,
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.address) {
      setIsOrderConfirmed(true);
      clearCart(); 
    }
  };

  // --- PANTALLA 3: COMPRA EXITOSA ---
  if (isOrderConfirmed) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full animate-in fade-in duration-500 text-center flex flex-col items-center gap-6">
        <div className="text-6xl">🌴🛵✨</div>
        <h3 className="font-bold text-3xl text-burger-brown">¡Orden en camino!</h3>
        <p className="text-xl text-gray-700 bg-cream-white p-4 rounded-xl border border-burger-brown/10">
          Tu <span className="font-bold text-tropical-orange">Orden Tropical</span> llegará pronto.
        </p>
        <button 
          onClick={() => {
            setIsOrderConfirmed(false);
            setIsCheckout(false);
            setIsCartVisible(false); // Cerramos el panel al terminar
            setName('');
            setAddress('');
          }}
          className="mt-4 w-full bg-burger-brown text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-all hover:scale-105"
        >
          Volver al Menú
        </button>
      </div>
    );
  }

  // --- PANTALLA 2: DATOS DE ENVÍO ---
  if (isCheckout) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 w-full animate-in fade-in duration-300">
        <h3 className="font-bold text-xl mb-6 text-burger-brown">Datos de Envío 🛵</h3>
        
        <div className="space-y-5">
          <div>
            <input 
              type="text" 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({...errors, name: false});
              }}
              placeholder="Nombre completo" 
              className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-tropical-orange focus:ring-2 focus:ring-tropical-orange/20 transition-all outline-none text-gray-800`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">Mínimo 3 caracteres</p>}
          </div>

          <div>
            <input 
              type="text" 
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                if (errors.address) setErrors({...errors, address: false});
              }}
              placeholder="Dirección de entrega" 
              className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-tropical-orange focus:ring-2 focus:ring-tropical-orange/20 transition-all outline-none text-gray-800`}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1 ml-2">Mínimo 5 caracteres</p>}
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button onClick={() => setIsCheckout(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all">Atrás</button>
          <button onClick={handleConfirmOrder} className="flex-[2] bg-gradient-to-r from-tropical-orange to-orange-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">Confirmar</button>
        </div>
      </div>
    );
  }

  // --- PANTALLA 1: RESUMEN DEL PEDIDO ---
  return (
    <div className="bg-burger-brown text-white p-6 md:p-8 rounded-3xl shadow-xl w-full transition-all">
      <h3 className="font-bold text-xl mb-5 flex justify-between items-center border-b border-white/10 pb-4">
        Tu Pedido 🍔
        <div className="flex items-center gap-3">
          <span className="bg-tropical-orange text-xs px-3 py-1 rounded-full font-mono">{cart.length}</span>
          {/* Botón para cerrar el panel manualmente */}
          <button onClick={() => setIsCartVisible(false)} className="hover:text-red-300">✕</button>
        </div>
      </h3>
      
      <ul className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2">
        {cart.map((item: any, index: number) => (
          <li key={index} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
            <span>{item.name}</span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-tropical-orange">{item.price}</span>
              <button 
                onClick={() => removeItem(index)}
                className="text-white/50 hover:text-red-400 transition-colors font-bold"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/20 pt-4 mb-6 flex justify-between items-center font-bold text-lg">
        <span>Total:</span>
        <span className="text-2xl text-tropical-orange">${total.toLocaleString('es-CO')}</span>
      </div>

      <button 
        onClick={() => setIsCheckout(true)}
        className="w-full bg-tropical-orange text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition-all hover:shadow-lg active:scale-95 text-lg"
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CartSummary;