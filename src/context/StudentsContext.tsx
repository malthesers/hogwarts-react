import { StudentsContext, OptionsContext, useHacking, useTheme } from '.'
import { ReactNode, useEffect, useReducer, useState } from 'react'
import getFormattedStudents from '../utils/reformatting'
import getMyself from '../utils/injection'
import PropTypes from 'prop-types';
import { Student } from '../interfaces/Student';
import { Action } from '../interfaces/Action';
import { Options } from '../interfaces/Options';

StudentsProvider.propTypes = {
  children: PropTypes.object
}

export function StudentsProvider({ children }: { children: ReactNode }) {
  const [students, dispatch] = useReducer(studentsReducer, initialStudents)
  const [displayedStudents, setDisplayedStudents] = useState<Student[]>([])
  const [options, setOptions] = useState<Options>({
    search: '',
    filter: 'all',
    sorting: 'firstName',
    sortingOrder: 1
  })

  const { isHacked } = useHacking()
  const { theme } = useTheme()

  // Load students on mount
  useEffect(() => {
    dispatch({ type: 'initialised', students: getFormattedStudents() })
  }, [])

  // Apply modifications upon hacking
  useEffect(() => {
    if (isHacked) {
      // Reset options
      setOptions({
        search: '',
        filter: 'all',
        sorting: 'firstName',
        sortingOrder: 1
      })

      // Inject self
      dispatch({ type: 'injected_self', student: getMyself() })

      // Randomise blood
      dispatch({ type: 'randomised_blood' })
    }
  }, [isHacked])

  // Calculate displayed students
  useEffect(() => {
    // Filter by house
    let filteredStudents:Student[] = [ ...students ].filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)

    // Include searching
    filteredStudents = filteredStudents.filter(student => student.fullName.toLowerCase().includes(options.search.toLowerCase()) || options.search === '')

    // Include filter
    if (options.filter === 'current') {
      filteredStudents = filteredStudents.filter(student => !student.expelled)
    } else {
      filteredStudents = filteredStudents.filter(student => student[options.filter as keyof Student] || options.filter === 'all')
    }

    // Include sorting
    filteredStudents.sort((a, b) => {
      return a[options.sorting] > b[options.sorting] ? (1 * options.sortingOrder) : (-1 * options.sortingOrder)
    })

    // If hacked, add me to start of array
    if (isHacked) {
      filteredStudents.sort((a) => {
        return a.firstName === 'Malthe' ? -1 : 1
      })
    }

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

const initialStudents:Student[] = []

function studentsReducer(students: Student[], action: Action) {
  switch (action.type) {
    case 'initialised': {
      return [...action.students]
    }
    case 'injected_self': {
      return [...students, action.student]
    }
    case 'toggled_prefect': {
      return students.map(student =>
        student.id === action.student?.id ? {...action.student, prefect: !action.student?.prefect} : student
      )
    }
    case 'toggled_inquisitor': {
      return students.map(student => 
        student.id === action.student?.id ? {...action.student, inquisitor: action.value} : student
      )
    }
    case 'expelled_student': {
      return students.map(student => 
        student.id === action.student?.id ? {...action.student, expelled: true} : student
      )
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