import React, { createContext, useState, useEffect } from 'react';

const ProductDetails = createContext();

export const ProductContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce((acc, item) => {
      return acc + item.product.price * item.count;
    }, 0);

    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cart]);

  const AddToCart = (product) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count++;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { product, count: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.product.id !== item.product.id
    );
    setCart(updatedCart);
  };

  const handleIncrementCount = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        item.count++;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrementCount = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        item.count--;
      }
      return item;
    });
    setCart(updatedCart);
  };

  //cart drawer--------------------------------------------
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ProductDetails.Provider
      value={{
        cart,
        setCart,
        AddToCart,
        handleDecrementCount,
        handleIncrementCount,
        handleDrawerClose,
        handleDrawerOpen,
        open,
        handleRemoveFromCart,
        totalPrice,
      }}
    >
      {children}
    </ProductDetails.Provider>
  );
};

export { ProductDetails };
