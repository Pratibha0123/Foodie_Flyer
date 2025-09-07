import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState({});
  const [user, setUserState] = useState(null);

  const setUser = (userObj) => {
    setUserState(userObj);
    if (userObj) {
      localStorage.setItem("currentUser", JSON.stringify(userObj));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("currentUser");
      if (saved) setUserState(JSON.parse(saved));
    } catch (err) {
      console.warn("Failed to parse currentUser from localStorage", err);
    }
  }, []);

 
  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
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
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
