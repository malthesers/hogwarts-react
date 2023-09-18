import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const AllStudentsContext = createContext()
const DisplayedStudentsContext = createContext()


export function useAllStudents() {
  return useContext(AllStudentsContext)
}

export function useDisplayedStudents() {
  return useContext(DisplayedStudentsContext)
}

export function StudentsProvider({ children }) {
  const [allStudents, setAllStudents] = useState([])
  const [displayedStudents, setDisplayedStudents] = useState([])

  const theme = useTheme()

  useEffect(() => {
    const formattedStudents = getFormattedStudents()
    setAllStudents(formattedStudents)
  }, [])

  useEffect(() => {
    const students = [ ...allStudents ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)
    setDisplayedStudents(students)
  }, [allStudents, theme])

  return (
    <AllStudentsContext.Provider value={allStudents}>
      <DisplayedStudentsContext.Provider value={displayedStudents}>
        {children}
      </DisplayedStudentsContext.Provider>
    </AllStudentsContext.Provider>
  )
}