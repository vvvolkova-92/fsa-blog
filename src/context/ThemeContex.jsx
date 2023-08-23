"use client"

import {createContext, useState} from "react";
import {modes} from "@/ulits/config";

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(modes.DARK);
  const changeTheme = () => {
    setTheme(prev => prev === modes.DARK ? modes.LIGHT : modes.DARK);
  };
  return <ThemeContext.Provider value={{theme, changeTheme}}>
    <div className={`theme ${theme}`}>
      {children}
    </div>
  </ThemeContext.Provider>
}