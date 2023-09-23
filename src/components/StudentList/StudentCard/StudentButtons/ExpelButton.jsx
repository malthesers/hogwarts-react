import { useRef } from "react"
import { useMessages } from "../../../../context/MessagesContext"
import { useStudents } from "../../../../context/StudentsContext"
import { useHacking } from "../../../../context/HackingContext"
import { useTheme } from "../../../../context/ThemeContext"

export default function ExpelButton({ student }) {
  const { setIsCursed } = useHacking()
  const { addMessage } = useMessages()
  const { dispatch } = useStudents()
  const { theme } = useTheme()
  const button = useRef(null)
  const howler = useRef(null)
  let expulsionAttempts = useRef(0)

  function expelStudent() {
    if (student.firstName === 'Malthe') {
      button.current.classList.add('shake')
      
      expulsionAttempts.current++
  
      if (expulsionAttempts.current === 1) {
        addMessage('expulsion1')
      } else if (expulsionAttempts.current === 2) {
        addMessage('expulsion2')
      } else if (expulsionAttempts.current === 3) {
        addMessage('expulsion3')
      } else {
        addMessage('curse')
        setIsCursed(true)
      }
    } else {
      howler.current.classList.add('howler')
    }
  }

  return (
    <button
      ref={button}
      onClick={expelStudent}
      disabled={student.expelled}
      onAnimationEnd={() => button.current.classList.remove('shake')}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + ' border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1'}
    >
      <p>{ student.expelled ? 'Expelled' : 'Expel Student' }</p>
      <img
        onAnimationEnd={() => dispatch({ type: 'expelled_student', student: student })}
        className="absolute w-20 rotate-[10deg] top-[-7%] right-[3%]"
        src="src/assets/icons/howler.svg"
        alt="howler expulsion icon"
        ref={howler}
      />
    </button>
  )
}