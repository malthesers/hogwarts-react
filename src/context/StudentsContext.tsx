import { StudentsContext, OptionsContext, useHacking, useTheme } from '.'
import { ReactNode, useEffect, useReducer, useState } from 'react'
import { BloodStatus, Student } from '../interfaces/Student';
import { Options } from '../interfaces/Options';
import { Action } from '../interfaces/Action';
import getFormattedStudents from '../utils/reformatting'
import getMyself from '../utils/injection'

export function StudentsProvider({ children }: { children: ReactNode }) {
  const [students, dispatch] = useReducer<React.Reducer<Student[], Action>>(studentsReducer, initialStudents)
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
    dispatch({ type: 'initialised', students: getFormattedStudents() as Student[] })
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
    let filteredStudents:Student[] = ([ ...students ] as Student[]).filter(student => student.house.toLowerCase() === theme || 'hogwarts' === theme)

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
      const aValue:(string | undefined) = a[options.sorting]
      const bValue:(string | undefined) = b[options.sorting]

      if (aValue !== undefined && bValue !== undefined) {
        return aValue > bValue ? (1 * options.sortingOrder) : (-1 * options.sortingOrder)
      } else {
        return 1 * options.sortingOrder
      }
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
      <OptionsContext.Provider value={{options, setOptions}}>
        {children}
      </OptionsContext.Provider>
    </StudentsContext.Provider>
  )
}

const initialStudents:Student[] = []

function studentsReducer(students: Student[], action:Action): Student[] {
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
          const bloodStatuses:BloodStatus[] = ['Muggle-born', 'Half-blood', 'Squib']

          return {...student, bloodStatus: bloodStatuses[Math.floor(Math.random() * 3)]}
        } else {
          return {...student, bloodStatus: 'Pure-blood'}
        }
      })
    }
  }
}