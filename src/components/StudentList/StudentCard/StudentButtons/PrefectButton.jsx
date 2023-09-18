import { useRef } from "react"
import { useAllStudents } from "../../../../context/StudentsContext"

export default function PrefectButton({ student }) {
  const button = useRef(null)
  const allStudents = useAllStudents()
  const housePrefects = allStudents.filter(otherStudent => otherStudent.prefect && otherStudent.house === student.house)

  function togglePrefect() {
    if (student.prefect) {
      student.prefect = false
    } else if (housePrefects.length === 2) {
      button.current.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else if (housePrefects.some(student => student.gender === student.gender)) {
      button.current.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else {
      console.log('yo')
      student.prefect = true
    }
  }

  return (
    <button onClick={togglePrefect} ref={button} className="border-2 p-2 flex justify-between">
      <p>Prefect</p>
      <span>{ student.prefect ? '-' : '+' }</span>
    </button>
  )
}