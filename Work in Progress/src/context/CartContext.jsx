import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    // Pre-populate with items for demonstration, matching your HTML
    {
      id: 1,
      name: 'Savipott',
      description: 'Pott otse Peetri Tuuliku tipust',
      price: 20,
      quantity: 1,
      imageUrl: '/assets/Käsitöö-pott-1.png'
    },
    {
      id: 2,
      name: 'Käsitöö tuulik',
      description: 'Disainitud orginaalse tuuliku järgi',
      price: 35,
      quantity: 1,
      imageUrl: '/assets/Käsitöö-tuulik-2.png'
    }
  ]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };
  
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};