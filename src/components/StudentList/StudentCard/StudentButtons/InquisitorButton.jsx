import { useRef } from "react"
import { useStudents } from "../../../../context/StudentsContext"
import { useTheme } from "../../../../context/ThemeContext"

export default function InquisitorButton({ student }) {
  const { dispatch } = useStudents()
  const button = useRef(null)
  const { theme } = useTheme()

  let isHacked = false //remove later

  function toggleInquisitor() {
    if (student.bloodStatus === 'Pure-blood' || student.house === 'Slytherin') {
      dispatch({ type: 'toggled_inquisitor', student: student })
  
      if (student.inquisitor && isHacked) {
        setTimeout(() => {
          student.inquisitor = false
          // addToMessages('hacking', student.firstName, isCursed)
        }, 2000)
      }
    } else {
      button.current.classList.add('shake')
      // addToMessages('inquisitor', student.firstName, isCursed)
    }
  }

  return (
    <button
      ref={button}
      onClick={toggleInquisitor}
      onAnimationEnd={() => button.current.classList.remove('shake')}
      className={`bg-${theme}-accent text-${theme}-dark border-${theme}-dark` + " border-2 p-2 flex justify-between"}
      disabled={student.expelled}
    >
      <p>Inquisitor</p>
      <span>{ student.inquisitor ? '-' : '+' }</span>
    </button>
  )
}