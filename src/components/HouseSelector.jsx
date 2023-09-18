import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

export default function HouseSelector({ showHouseSelector }) {
  const theme = useContext(ThemeContext)

  return (
    <footer className={showHouseSelector ? 'h-full' : 'h-20 ' + `bg-${theme}-dark ` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p>o</p>
    </footer>
  )
}