import { createContext, useContext } from "react";

export const ThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}

export const StudentsContext = createContext();
export function useStudents() {
  return useContext(StudentsContext);
}

export const OptionsContext = createContext();
export function useOptions() {
  return useContext(OptionsContext);
}
