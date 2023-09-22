import { createContext, useContext, useEffect, useState } from "react"
import { useOptions } from "./StudentsContext"

const HackingContext = createContext()

export function useHacking() {
  return useContext(HackingContext)
}

export function HackingProvider({ children }) {
  const [isHacked, setIsHacked] = useState(false)
  const [isCursed, setIsCursed] = useState(false)
  const [options, setOptions] = useOptions()

  useEffect(() => {
    if (isHacked) {
      setOptions({
        search: '',
        filter: 'all',
        sorting: 'firstName',
        sortingOrder: 1
      })
    }
  }, [isHacked])

  return (
    <HackingContext.Provider value={{isHacked, setIsHacked, isCursed, setIsCursed}}>
      {children}
    </HackingContext.Provider>
  )
}