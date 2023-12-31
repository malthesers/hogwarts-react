import { Student } from '../../../../interfaces/Student'
import { useStudents } from '../../../../context'
import { useMessages } from '../../../../context'
import { useTheme } from '../../../../context'
import { useRef } from 'react'

interface PrefectButtonProps {
  student: Student
}

export default function PrefectButton({ student }: PrefectButtonProps) {
  const { students, dispatch } = useStudents()
  const { addMessage } = useMessages()
  const { theme } = useTheme()
  const button = useRef<HTMLButtonElement>(null)

  const housePrefects = students.filter(otherStudent => otherStudent.prefect && otherStudent.house === student.house)

  function togglePrefect() {
    if (student.prefect) {
      dispatch({ type: 'toggled_prefect', student: student })
    } else if (housePrefects.length === 2) {
      button.current?.classList.add('shake')
      addMessage('house', student.house)
    } else if (housePrefects.some(prefect => prefect.gender === student.gender)) {
      button.current?.classList.add('shake')
      addMessage('gender', student.house)
    } else {
      dispatch({ type: 'toggled_prefect', student: student })
    }
  }

  return (
    <button
      ref={button}
      onClick={togglePrefect}
      disabled={student.expelled}
      onAnimationEnd={() => button.current?.classList.remove('shake')}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + ' border-2 p-2 flex justify-between'}
    >
      <p>Prefect</p>
      <span>{ student.prefect ? '-' : '+' }</span>
    </button>
  )
}