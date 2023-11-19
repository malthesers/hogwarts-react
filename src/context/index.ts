import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Message, Type } from '../interfaces/Message';
import { Options } from '../interfaces/Options';
import { Student } from '../interfaces/Student';
import { Action } from '../interfaces/Action';
import { House } from '../interfaces/House';

export const ThemeContext = createContext<{
  theme: House,
  updateTheme: (House: House) => void,
}>({
  theme: 'hogwarts',
  updateTheme: () => {}
});
export function useTheme() {
  return useContext(ThemeContext);
}

export const StudentsContext = createContext<{
  students: Student[],
  dispatch: Dispatch<Action>,
  displayedStudents: Student[]
}>({
  students: [],
  dispatch: () => {},
  displayedStudents: []
});
export function useStudents() {
  return useContext(StudentsContext);
}

export const OptionsContext = createContext<{
  options: Options,
  setOptions: Dispatch<SetStateAction<Options>>
}>({
  options: {
    search: '',
    filter: 'all',
    sorting: 'firstName',
    sortingOrder: 1
  },
  setOptions: () => {}
});
export function useOptions() {
  return useContext(OptionsContext);
}

export const HackingContext = createContext<{
  isHacked: boolean,
  isCursed: boolean,
  expulsionAttempts: number,
  incrementExpulsionAttempts: () => void,
  hackTheSystem: () => void,
  curseTheSystem: () => void,
  curseHogwarts: () => void
}>({
  isHacked: false,
  isCursed: false,
  expulsionAttempts: 1,
  incrementExpulsionAttempts: () => {},
  hackTheSystem: () => {},
  curseTheSystem: () => {},
  curseHogwarts: () => {}
});
export function useHacking() {
  return useContext(HackingContext);
}

export const MessagesContext = createContext<{
  messages: Message[],
  addMessage: (type: Type, query?: string) => void,
  removeMessage: (id: string) => void
}>({
  messages: [],
  addMessage: () => {},
  removeMessage: () => {}
});
export function useMessages() {
  return useContext(MessagesContext);
}
