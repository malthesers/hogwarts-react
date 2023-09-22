import { createContext, useContext, useEffect, useState } from "react"
import { useOptions, useStudents } from "./StudentsContext"

const me = {
  fullName: "Malthe Kusk Lauritsen",
  firstName: "Malthe",
  middleName: "Kusk",
  nickName: undefined,
  lastName: "Lauritsen",
  gender: "Male",
  house: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)],
  photo: `default.png`,
  bloodStatus: "Half-breed",
  captain: false,
  prefect: false,
  expelled: false,
  inquisitor: false,
}

const HackingContext = createContext()

export function useHacking() {
  return useContext(HackingContext)
}

export function HackingProvider({ children }) {
  const [isHacked, setIsHacked] = useState(false)
  const [isCursed, setIsCursed] = useState(false)
  const [options, setOptions] = useOptions()
  const { dispatch } = useStudents()

  useEffect(() => {
    if (isHacked) {
      // Reset options
      setOptions({
        search: '',
        filter: 'all',
        sorting: 'firstName',
        sortingOrder: 1
      })

      // Inject self
      dispatch({
        type: 'injected_self',
        student: me
      })

      // Randomise blood
      dispatch({
        type: 'randomised_blood'
      })
    }
  }, [isHacked])

  return (
    <HackingContext.Provider value={{isHacked, setIsHacked, isCursed, setIsCursed}}>
      {children}
    </HackingContext.Provider>
  )
}