'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Creamos el contexto
const CartContext = createContext<any>(null);

// Creamos el proveedor
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (burger: any) => {
    setCart([...cart, burger]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => useContext(CartContext);