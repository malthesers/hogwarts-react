import { useRef } from "react"

export default function InquisitorButton({ student }) {
  const button = useRef(null)

  function toggleInquisitor() {
    if (student.bloodStatus === 'Pure-blood' || student.house === 'Slytherin') {
      student.inquisitor = !student.inquisitor
  
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
      className="border-2 p-2 flex justify-between"
    >
      <p>Inquisitor</p>
      <span>{ student.inquisitor ? '-' : '+' }</span>
    </button>
  )
}