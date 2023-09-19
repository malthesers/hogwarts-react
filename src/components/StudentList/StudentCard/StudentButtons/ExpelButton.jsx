import { useRef } from "react"
import { useTheme } from "../../../../context/ThemeContext"
import { useStudentDispatchContext } from "../../../../context/StudentsContext"

export default function ExpelButton({ student }) {
  const dispatch = useStudentDispatchContext()
  const button = useRef(null)
  const howler = useRef(null)
  const theme = useTheme()
  
  let expulsionAttempts = 0

  function expelStudent() {
    if (student.firstName === 'Malthe') {
      // Increment expulsion attempts
      expulsionAttempts++
  
      button.current.classList.add('shake')
  
      if (expulsionAttempts === 1) {
        // addToMessages('expulsion1')
      } else if (expulsionAttempts === 2) {
        // addToMessages('expulsion2')
      } else if (expulsionAttempts === 3) {
        // addToMessages('expulsion3')
        // curseHogwarts()
      } else {
        // addToMessages('curse', '', isCursed)
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