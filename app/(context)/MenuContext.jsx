"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const values = {
    showHomeMenu,
    setShowHomeMenu,
  };
  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => useContext(MenuContext);

export default MenuProvider;
