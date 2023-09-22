import { useState } from "react"

const HackingContext = createContext()

export function useHacking() {
  return useContext(HackingContext)
}

export function HackingProvider({ children }) {
  const [isHacked, setIsHacked] = useState([])
  const [isCursed, setIsCursed] = useState([])

  return (
    <HackingContext.Provider value={{isHacked, isCursed}}>
      {children}
    </HackingContext.Provider>
  )
}