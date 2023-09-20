import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()
const DisplayedStudentsContext = createContext()
const StudentsOptionsContext = createContext()

export function useStudents() {
  return useContext(StudentsContext)
}

export function useDisplayedStudents() {
  return useContext(DisplayedStudentsContext)
}

export function useStudentsOptionsContext() {
  return useContext(StudentsOptionsContext)
}

export function StudentsProvider({ children }) {
  const [students, dispatch] = useReducer(studentsReducer, initialStudents)
  const [displayedStudents, setDisplayedStudents] = useState([])
  const [options, setOptions] = useState({
    search: '',
    filter: 'all',
    sorting: 'firstName',
    sortingOrder: 1
  })

  const theme = useTheme()

  // Load students on mount
  useEffect(() => {
    dispatch({
      type: 'initialised',
      students: getFormattedStudents()
    })
  }, [])

  // Calculate displayed students
  useEffect(() => {
    let filteredStudents = [ ...students ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)

    filteredStudents = filteredStudents.filter(student => !student.expelled)

    setDisplayedStudents(filteredStudents)
  }, [students, theme])

  return (
    <StudentsContext.Provider value={{students, dispatch}}>
      <DisplayedStudentsContext.Provider value={displayedStudents}>
        <StudentsOptionsContext.Provider value={options}>
          {children}
        </StudentsOptionsContext.Provider>
      </DisplayedStudentsContext.Provider>
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
    case 'expelled_student': {
      return students.map(student => {
        if (student.id === action.student.id) {
          return {...action.student, expelled: true}
        } else {
          return student
        }
      })
    }
  }
}