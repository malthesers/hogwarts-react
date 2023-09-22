import { createContext, useContext, useState } from "react"

const HackingContext = createContext()

export function useHacking() {
  return useContext(HackingContext)
}

export function HackingProvider({ children }) {
  const [isHacked, setIsHacked] = useState(false)
  const [isCursed, setIsCursed] = useState(false)

  return (
    <HackingContext.Provider value={{isHacked, setIsHacked, isCursed, setIsCursed}}>
      {children}
    </HackingContext.Provider>
  )
}