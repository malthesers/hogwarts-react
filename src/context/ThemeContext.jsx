import { ThemeContext } from './';
import { useState } from 'react';
import PropTypes from 'prop-types';

ThemeProvider.propTypes = {
  children: PropTypes.object
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
