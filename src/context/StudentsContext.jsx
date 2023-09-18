import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()
const StudentDispatchContext = createContext()
const DisplayedStudentsContext = createContext()

export function useStudents() {
  return useContext(StudentsContext)
}

export function useStudentDispatchContext() {
  return useContext(StudentDispatchContext)
}

export function useDisplayedStudents() {
  return useContext(DisplayedStudentsContext)
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

const initialStudents = []

function studentsReducer(students, action) {
  switch (action.type) {
    case 'initialised': {
      return [
        ...action.students
      ]
    }
    case 'toggled_prefect': {
      return students.map(student => {
        if (student.id === action.student.id) {
          return {...action.student, prefect: !action.student.prefect}
        } else {
          return student
        }
      })
    }
    case 'toggled_inquisitor': {
      return students.map(student => {
        if (student.id === action.student.id) {
          return {...action.student, inquisitor: !action.student.inquisitor}
        } else {
          return student
        }
      })
    }
  }
}