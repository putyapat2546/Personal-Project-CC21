import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the shopping cart
// Context allows sharing data across components without passing props manually
const CartContext = createContext();

// CartProvider component wraps the app and provides cart functionality to all child components
export function CartProvider({ children }) {
  // Initialize cart state from localStorage (persists cart even after page refresh)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Automatically save cart to localStorage whenever it changes
  // This ensures cart persists across browser sessions
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  // If same product with same size/color exists, increase quantity
  // Or, add as new item
  const addToCart = (product, selectedSize, selectedColor) => {
    setCartItems((prevItems) => {
      // Check if item with same product, size, and color already exists
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor.name
      );

      if (existingItemIndex > -1) {
        // Item already exists - just increase quantity by 1
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // New item - add to cart with quantity 1
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            color: selectedColor.name,
            colorHex: selectedColor.hex,
            quantity: 1,
            image: product.image || product.images?.[0],
          },
        ];
      }
    });
  };

  // Remove item completely from cart by id
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update quantity of a specific item
  // Prevents setting quantity below 1
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove all items from cart 
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total number of items in cart (sum of all quantities)
  // Used for cart badge on navbar
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Provide cart state and functions to all child components
  return (
    <CartContext.Provider
      value={{
        cartItems,        // Array of items in cart
        addToCart,        // Function to add item to cart
        removeFromCart,   // Function to remove item from cart
        updateQuantity,   // Function to change item quantity
        clearCart,        // Function to empty entire cart
        cartCount,        // Total number of items (for badge display)
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context in any component
// const { cartItems, addToCart } = useCart();
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
