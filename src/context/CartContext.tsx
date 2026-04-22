'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definimos la estructura del contexto para mejor control
interface CartContextType {
  cart: any[];
  addToCart: (burger: any) => void;
  removeItem: (indexToRemove: number) => void;
  clearCart: () => void;
  isCartVisible: boolean;
  setIsCartVisible: (visible: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  // Estado para controlar la visibilidad del resumen del pedido (Sidebar)
  const [isCartVisible, setIsCartVisible] = useState(false);

  // 1. Cargar desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 2. Guardar en localStorage cada vez que el carrito cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (burger: any) => {
    setCart((prevCart) => [...prevCart, burger]);
  };

  const removeItem = (indexToRemove: number) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe estar dentro de un CartProvider');
  return context;
};