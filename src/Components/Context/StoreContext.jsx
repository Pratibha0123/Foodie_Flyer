/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});
  const [user, setUserState] = useState(null);

  // Persist user to localStorage when setUser is called
  const setUser = (userObj) => {
    setUserState(userObj);
    if (userObj) {
      localStorage.setItem("currentUser", JSON.stringify(userObj));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  // Initialize user from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("currentUser");
      if (saved) setUserState(JSON.parse(saved));
    } catch (err) {
      console.warn("Failed to parse currentUser from localStorage", err);
    }
  }, []);

  // --- CART LOGIC ---
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    // if quantity becomes <= 0 we keep it, your UI should ignore <= 0
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product.id === item);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log("Cart Updated:", cartItems);
    console.log("User:", user);
  }, [cartItems, user]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    user,
    setUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
