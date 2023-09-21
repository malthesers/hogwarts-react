import { useRef } from "react"
import { useMessages } from "../../../../context/MessagesContext"
import { useStudents } from "../../../../context/StudentsContext"
import { useTheme } from "../../../../context/ThemeContext"

export default function ExpelButton({ student }) {
  const { addMessage } = useMessages()
  const { dispatch } = useStudents()
  const { theme } = useTheme()
  const button = useRef(null)
  const howler = useRef(null)
  
  let expulsionAttempts = 0

  function expelStudent() {
    if (student.firstName === 'Malthe') {
      // Increment expulsion attempts
      expulsionAttempts++
  
      button.current.classList.add('shake')
  
      if (expulsionAttempts === 1) {
        addMessage('expulsion1')
      } else if (expulsionAttempts === 2) {
        addMessage('expulsion2')
      } else if (expulsionAttempts === 3) {
        addMessage('expulsion3')
        // curseHogwarts()
      } else {
        addMessage('curse')
      }
    } else {
      howler.current.classList.add('howler')
    }
  }

  return (
    <button
      onClick={expelStudent}
      ref={button}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + ' border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1'}
      disabled={student.expelled}
    >
      <p>{ student.expelled ? 'Expelled' : 'Expel Student' }</p>
      <img onAnimationEnd={() => dispatch({ type: 'expelled_student', student: student })} ref={howler} src="src/assets/icons/howler.svg" alt="howler expulsion icon" className="absolute w-20 rotate-[10deg] top-[-7%] right-[3%]" />
    </button>
  )
}