// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';



// Define your theme variables
const LightTheme = {
  background: '#ffffff',
  color: '#333333',
};

const DarkTheme = {
  background: '#333333',
  color: '#ffffff',
};

// Create the theme context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'Light' ? 'Dark' : "Light"));
  };

  const themeValues = theme === 'Light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeValues}>{children}</div>
    </ThemeContext.Provider>
  );
};
