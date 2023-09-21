import { useTheme } from "../../context/ThemeContext"

export default function MessagesContainer() {
  const theme = useTheme()

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full p-4 pointer-events-none">
      <div className="relative max-w-2xl mx-auto">
        {/* <div v-for="message in messages" :key="message" :className="`bg-${theme}-dark border-${theme}-accent`" className="absolute w-full p-2 flex justify-between border-2 rounded-lg">
          <div>
            <p className="text-md sm:text-2xl">{{ message.title }}</p>
            <p className="text-sm sm:text-lg">{{ message.description }}</p>
          </div>
          <img src="../assets/icons/messenger-owl.svg" alt="messenger owl" className="w-12 place-self-center">
        </div> */}
      </div>
    </div>
  )
}
