import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('hogwarts');

  function updateTheme(house) {
    setTheme(house)
    document.querySelector('body').setAttribute('theme', house)
  }

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
