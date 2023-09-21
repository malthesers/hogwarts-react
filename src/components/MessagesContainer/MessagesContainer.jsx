import { useTheme } from "../../context/ThemeContext"

export default function MessagesContainer() {
  const theme = useTheme()

  return (
    <div class="fixed z-10 top-0 left-0 w-full h-full p-4 pointer-events-none">
      <div class="relative max-w-2xl mx-auto">
        {/* <div v-for="message in messages" :key="message" :class="`bg-${theme}-dark border-${theme}-accent`" class="absolute w-full p-2 flex justify-between border-2 rounded-lg">
          <div>
            <p class="text-md sm:text-2xl">{{ message.title }}</p>
            <p class="text-sm sm:text-lg">{{ message.description }}</p>
          </div>
          <img src="../assets/icons/messenger-owl.svg" alt="messenger owl" class="w-12 place-self-center">
        </div> */}
      </div>
    </div>
  )
}
