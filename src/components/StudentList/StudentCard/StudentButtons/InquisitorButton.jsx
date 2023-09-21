import { useRef } from "react"
import { useStudents } from "../../../../context/StudentsContext"
import { useTheme } from "../../../../context/ThemeContext"
import { useMessages } from "../../../../context/MessagesContext"

export default function InquisitorButton({ student }) {
  const { addMessage } = useMessages()
  const { dispatch } = useStudents()
  const { theme } = useTheme()
  const button = useRef(null)

  let isHacked = false //remove later

  function toggleInquisitor() {
    if (student.bloodStatus === 'Pure-blood' || student.house === 'Slytherin') {
      dispatch({ type: 'toggled_inquisitor', student: student })
  
      if (student.inquisitor && isHacked) {
        setTimeout(() => {
          student.inquisitor = false
          addMessage('hacking', student.firstName)
        }, 2000)
      }
    } else {
      button.current.classList.add('shake')
      addMessage('inquisitor', student.firstName)
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