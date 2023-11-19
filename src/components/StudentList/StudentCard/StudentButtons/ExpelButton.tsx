import { useMessages, useStudents, useHacking, useTheme } from '../../../../context'
import { Student } from '../../../../interfaces/Student'
import { useRef } from 'react'

interface ExpelButtonProps {
  student: Student
}

export default function ExpelButton({ student }: ExpelButtonProps) {
  const { curseTheSystem, expulsionAttempts, incrementExpulsionAttempts } = useHacking()
  const { addMessage } = useMessages()
  const { dispatch } = useStudents()
  const { theme } = useTheme()
  const button = useRef<HTMLButtonElement>(null)
  const howler = useRef<HTMLImageElement>(null)

  function expelStudent() {
    if (student.firstName === 'Malthe') {
      button.current?.classList.add('shake')      
  
      if (expulsionAttempts === 1) {
        incrementExpulsionAttempts()
        addMessage('expulsion1')
      } else if (expulsionAttempts === 2) {
        incrementExpulsionAttempts()
        addMessage('expulsion2')
      } else if (expulsionAttempts === 3) {
        incrementExpulsionAttempts()
        addMessage('expulsion3')
      } else {
        addMessage('curse')
        curseTheSystem()
      }
    } else {
      howler.current?.classList.add('howler')
    }
  }

  return (
    <button
      ref={button}
      onClick={expelStudent}
      disabled={student.expelled}
      onAnimationEnd={() => button.current?.classList.remove('shake')}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + ' border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1'}
    >
      <p>{ student.expelled ? 'Expelled' : 'Expel Student' }</p>
      <img
        onAnimationEnd={() => dispatch({ type: 'expelled_student', student: student })}
        className='absolute w-20 rotate-[10deg] top-[-7%] right-[3%]'
        src='images/icons/howler.svg'
        alt='howler expulsion icon'
        ref={howler}
      />
    </button>
  )
}