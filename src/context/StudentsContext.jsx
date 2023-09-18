import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()
const DisplayedStudentsContext = createContext()

export function useStudents() {
  return useContext(StudentsContext)
}

export function useDisplayedStudents() {
  return useContext(DisplayedStudentsContext)
}

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([])
  const [displayedStudents, setDisplayedStudents] = useState([])

  const theme = useTheme()

  useEffect(() => {
    const formattedStudents = getFormattedStudents()
    setStudents(formattedStudents)
  }, [])

  // Calculate displayed students
  useEffect(() => {
    const filteredStudents = [ ...students ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)
    setDisplayedStudents(filteredStudents)
  }, [students, theme])

  return (
    <StudentsContext.Provider value={students}>
      <DisplayedStudentsContext.Provider value={displayedStudents}>
        {children}
      </DisplayedStudentsContext.Provider>
    </StudentsContext.Provider>
  )
}