"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const values = {
    showHomeMenu,
    setShowHomeMenu,
  };
  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => useContext(MenuContext);
