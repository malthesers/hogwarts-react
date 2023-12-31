import { Student } from '../../../../interfaces/Student'
import { useStudents } from '../../../../context'
import { useMessages } from '../../../../context'
import { useHacking } from '../../../../context'
import { useTheme } from '../../../../context'
import { useRef } from 'react'

interface InquisitorButtonProps {
  student: Student
}

export default function InquisitorButton({ student }: InquisitorButtonProps) {
  const { addMessage } = useMessages()
  const { dispatch } = useStudents()
  const { isHacked } = useHacking()
  const { theme } = useTheme()
  const button = useRef<HTMLButtonElement>(null)

  function toggleInquisitor() {
    if (student.inquisitor) {
      dispatch({ type: 'toggled_inquisitor', student: student, value: false })
    } else {
      if (student.bloodStatus === 'Pure-blood' || student.house === 'Slytherin') {
        dispatch({ type: 'toggled_inquisitor', student: student, value: true })
        if (isHacked) {
          setTimeout(() => {
            dispatch({ type: 'toggled_inquisitor', student: student, value: false })
            addMessage('hacking', student.firstName)
          }, 2000)
        }
      } else {
        button.current?.classList.add('shake')
        addMessage('inquisitor', student.firstName)
      }
    }
  }

  return (
    <button
      ref={button}
      onClick={toggleInquisitor}
      disabled={student.expelled}
      onAnimationEnd={() => button.current?.classList.remove('shake')}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + ' border-2 p-2 flex justify-between'}
    >
      <p>Inquisitor</p>
      <span>{ student.inquisitor ? '-' : '+' }</span>
    </button>
  )
}