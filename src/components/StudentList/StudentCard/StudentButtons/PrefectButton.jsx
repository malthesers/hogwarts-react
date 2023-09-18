import { useRef } from "react"
import { useStudentDispatchContext, useStudents } from "../../../../context/StudentsContext"

export default function PrefectButton({ student }) {
  const button = useRef(null)
  const students = useStudents()
  const dispatch = useStudentDispatchContext()

  const housePrefects = students.filter(otherStudent => otherStudent.prefect && otherStudent.house === student.house)

  function togglePrefect() {
    console.log(housePrefects)
    if (student.prefect) {
      dispatch({ type: 'toggled_prefect', student: student })
    } else if (housePrefects.length === 2) {
      button.current.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else if (housePrefects.some(prefect => prefect.gender === student.gender)) {
      button.current.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else {
      dispatch({ type: 'toggled_prefect', student: student })
    }
  }

  return (
    <button onClick={togglePrefect} ref={button} className="border-2 p-2 flex justify-between">
      <p>Prefect</p>
      <span>{ student.prefect ? '-' : '+' }</span>
    </button>
  )
}