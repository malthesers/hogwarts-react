import { ThemeContext } from '.';
import { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import { House } from '../interfaces/House';

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<House>('hogwarts');
  const body:(HTMLBodyElement | null) = document.querySelector('body')

  function updateTheme(house: House): void {
    setTheme(house)
    body?.setAttribute('theme', house)
  }

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
