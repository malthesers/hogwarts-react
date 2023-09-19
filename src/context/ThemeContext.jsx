import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const ThemeUpdaterContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdater() {
  return useContext(ThemeUpdaterContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('hogwarts');

  function updateTheme(house) {
    setTheme(theme => house)
    document.querySelector('body').setAttribute('theme', house)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={updateTheme}>
        {children}
      </ThemeUpdaterContext.Provider>
    </ThemeContext.Provider>
  );
}
