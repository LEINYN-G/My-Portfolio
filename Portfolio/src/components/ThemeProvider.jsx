"use client";
import React, { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {}, // noop, no toggling
});

const ThemeProvider = ({ children }) => {
  // Directly force body to dark mode
  if (typeof document !== "undefined") {
    document.body.className = "bg-black text-gray-100";
  }

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
