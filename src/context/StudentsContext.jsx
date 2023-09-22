import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { useTheme } from "./ThemeContext"
import getFormattedStudents from "../utils/reformatting"

const StudentsContext = createContext()
const OptionsContext = createContext()

export function useStudents() {
  return useContext(StudentsContext)
}

export function useOptions() {
  return useContext(OptionsContext)
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

  const { theme } = useTheme()

  // Load students on mount
  useEffect(() => {
    dispatch({
      type: 'initialised',
      students: getFormattedStudents()
    })
  }, [])

  // Calculate displayed students
  useEffect(() => {
    // Filter by house
    let filteredStudents = [ ...students ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)

    // Include searching
    filteredStudents = filteredStudents.filter(student => student.fullName.toLowerCase().includes(options.search.toLowerCase()) || options.search === '')

    // Include filter
    if (options.filter === 'current') {
      filteredStudents = filteredStudents.filter(student => !student.expelled)
    } else {
      filteredStudents = filteredStudents.filter(student => student[options.filter] || options.filter === 'all')
    }

    // Include sorting
    filteredStudents.sort((a, b) => {
      return a[options.sorting] > b[options.sorting] ? (1 * options.sortingOrder) : (-1 * options.sortingOrder)
    })

    setDisplayedStudents(filteredStudents)
  }, [students, options, theme])

  return (
    <StudentsContext.Provider value={{students, dispatch, displayedStudents}}>
      <OptionsContext.Provider value={[options, setOptions]}>
        {children}
      </OptionsContext.Provider>
    </StudentsContext.Provider>
  )
}

const initialStudents = []

function studentsReducer(students, action) {
  switch (action.type) {
    case 'initialised': {
      return [...action.students]
    }
    case 'injected_self': {
      return [...students, action.student]
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
    case 'randomised_blood': {
      return students.map(student => {
        if (student.bloodStatus === 'Pure-blood') {
          return {...student, bloodStatus: ['Muggle-born', 'Half-blood', 'Squib'][Math.floor(Math.random() * 3)]}
        } else {
          return {...student, bloodStatus: 'Pure-blood'}
        }
      })
    }
  }
}