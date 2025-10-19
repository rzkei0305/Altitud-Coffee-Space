import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {

  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    console.log("Adding item:", item);
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((p) => p.name === item.name);
      if (existingItem) {
        
        return prevBasket.map((p) =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      
      return [...prevBasket, item];
    });
  };

  const updateQuantity = (name, newQty) => {
  setBasket(prev =>
    prev.map(item =>
      item.name === name
        ? { ...item, quantity: Math.max(1, newQty) }
        : item
    ));
  };


  const removeFromBasket = (name) => {
    setBasket((prev) => prev.filter((item) => item.name !== name));
  };


  const clearBasket = () => setBasket([]);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, clearBasket, removeFromBasket, updateQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
