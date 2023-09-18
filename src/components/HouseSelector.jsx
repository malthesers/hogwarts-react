import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

export default function HouseSelector({ showHouseSelector, toggleHouseSelector }) {
  const theme = useContext(ThemeContext)

  return (
    <footer className={(showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={(showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={toggleHouseSelector} className="hogwarts-crest-container grid mx-auto cursor-pointer duration-500">house</div>
    </footer>
  )
}