import { useTheme } from "../../context/ThemeContext"

export default function MessagePopup({ message }) {
  const { theme } = useTheme()

  return (
    <div onAnimationEnd={() => console.log('yo')} className={`bg-${theme}-dark border-${theme}-accent` + ' absolute w-full p-2 flex justify-between border-2 rounded-lg popup'}>
      <div>
        <p className="text-md sm:text-2xl">{ message.title }</p>
        <p className="text-sm sm:text-lg">{ message.description }</p>
      </div>
      <img src="src/assets/icons/messenger-owl.svg" alt="messenger owl" className="w-12 place-self-center"/>
    </div>
  )
}
