import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()
const StudentDispatchContext = createContext()
const DisplayedStudentsContext = createContext()

export function useStudents() {
  return useContext(StudentsContext)
}

export function useDisplayedStudents() {
  return useContext(DisplayedStudentsContext)
}

const initialStudents = []

function studentsReducer(state, action) {
  switch (action.type) {
    case 'initialised': {
      return [
        ...action.students
      ]
    }
  }
}

export function StudentsProvider({ children }) {
  const [students, dispatch] = useReducer(studentsReducer, initialStudents)
  const [displayedStudents, setDisplayedStudents] = useState([])

  const theme = useTheme()

  useEffect(() => {
    dispatch({
      type: 'initialised',
      students: getFormattedStudents()
    })
  }, [])

  // Calculate displayed students
  useEffect(() => {
    const filteredStudents = [ ...students ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)
    setDisplayedStudents(filteredStudents)
  }, [students, theme])

  return (
    <StudentsContext.Provider value={students}>
      <StudentDispatchContext.Provider value={dispatch}>
        <DisplayedStudentsContext.Provider value={displayedStudents}>
          {children}
        </DisplayedStudentsContext.Provider>
      </StudentDispatchContext.Provider>
    </StudentsContext.Provider>
  )
}