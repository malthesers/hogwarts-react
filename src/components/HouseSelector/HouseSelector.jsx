import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { animateHouse, unanimateHouse } from "../../utils/housing";
import CrestColour from "./CrestColour";
import CrestPart from "./CrestPart";

export default function HouseSelector({ showHouseSelector, setShowHouseSelector }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const { theme } = useTheme()
  
  function animateCrest() {
    const housesOrder = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'hogwarts', '']
    setIsAnimating(true)

    housesOrder.forEach((house, index) => {
      setTimeout(() => {
        if (index !== 0) unanimateHouse(housesOrder[index - 1]) // Skip unanimation on first iteration
        if (index !== 5) animateHouse(house)                    // Skip animation of '' on last iteration
        if (index === 5) {                                      // Close house selector on last iteration
          setShowHouseSelector(false)
          setIsAnimating(false)
        }
      }, 400 * (index + 1))
    })
  }

  useEffect(() => {
    animateCrest()
  }, [])

  return (
    <footer className={ (showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={ (showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={() => setShowHouseSelector(!showHouseSelector)} className={ (isAnimating ? '[&>*]:pointer-events-none pointer-events-none ' : '[&>*]:cursor-pointer  cursor-pointer ') + (showHouseSelector ? 'w-[20rem] sm:w-[30rem]' : '[&>*]:pointer-events-none w-[6rem] mb-20') + ' hogwarts-crest-container grid mx-auto duration-500'}>
        <img className="hogwarts-crest-frame" src="src/assets/hogwarts-parts/hogwarts-frame.svg"/>
        <CrestColour house='gryffindor'/>
        <CrestColour house='slytherin'/>
        <CrestColour house='hufflepuff'/>
        <CrestColour house='ravenclaw'/>
        <CrestPart house='gryffindor' />
        <CrestPart house='slytherin' />
        <CrestPart house='hufflepuff' part='-body' />
        <CrestPart house='hufflepuff' />
        <CrestPart house='ravenclaw' />
        <CrestPart house='hogwarts' />
      </div>
    </footer>
  )
}