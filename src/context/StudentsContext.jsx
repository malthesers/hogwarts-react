import { createContext, useContext, useEffect, useState } from "react"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()

export function useStudentList() {
  return useContext(StudentsContext)
}

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const formattedStudents = getFormattedStudents()
    setStudents(formattedStudents)
  }, [])

  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  )
}