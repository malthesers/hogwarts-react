import { useEffect, useRef, useState } from "react";
import { animateHouse, unanimateHouse } from "../../utils/housing";
import { useHacking } from "../../context/HackingContext";
import { useTheme } from "../../context/";
import CrestColour from "./CrestColour";
import CrestPart from "./CrestPart";
import PropTypes from 'prop-types';

HouseSelector.propTypes = {
  showHouseSelector: PropTypes.bool,
  toggleHouseSelector: PropTypes.func
}

export default function HouseSelector({ showHouseSelector, toggleHouseSelector }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const { isHacked } = useHacking()
  const { theme } = useTheme()
  const mist = useRef(null)
  
  function animateCrest() {
    const housesOrder = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'hogwarts', '']
    setIsAnimating(true)

    housesOrder.forEach((house, index) => {
      setTimeout(() => {
        if (index !== 0) unanimateHouse(housesOrder[index - 1]) // Skip unanimation on first iteration
        if (index !== 5) animateHouse(house)                    // Skip animation of '' on last iteration
        if (index === 5) {                                      // Close house selector on last iteration
          toggleHouseSelector(false)
          setIsAnimating(false)
        }
      }, 400 * (index + 1))
    })
  }
  
  useEffect(() => {
    if (isHacked) {
      mist.current.classList.add('appear')
    }
  }, [isHacked])

  useEffect(() => {
    animateCrest()
  }, [])

  return (
    <footer className={ (showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={ (showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={toggleHouseSelector} className={ (isAnimating ? '[&>*]:pointer-events-none pointer-events-none ' : '[&>*]:cursor-pointer  cursor-pointer ') + (showHouseSelector ? 'w-[20rem] sm:w-[30rem]' : '[&>*]:pointer-events-none w-[6rem] mb-20') + ' hogwarts-crest-container grid mx-auto duration-500'}>
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
        <img onAnimationEnd={animateCrest} ref={mist} src="src/assets/hogwarts-parts/imperio-mist.svg" alt="imperio mist" className="w-0 place-self-center z-20"/>
      </div>
    </footer>
  )
}