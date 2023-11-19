import { useEffect, useRef } from 'react';
import { animateHouse, unanimateHouse } from '../../utils/housing';
import { House } from '../../interfaces/House';
import { useHacking } from '../../context';
import { useTheme } from '../../context';
import useToggle from '../../hooks/useToggle';
import CrestColour from './CrestColour';
import CrestPart from './CrestPart';

interface HouseSelectorProps {
  showHouseSelector: boolean,
  toggleHouseSelector: (value?: boolean) => void
}

export default function HouseSelector({ showHouseSelector, toggleHouseSelector }: HouseSelectorProps) {
  const [animating, toggleAnimating] = useToggle(true)
  const { isHacked } = useHacking()
  const { theme } = useTheme()
  const mist = useRef<HTMLImageElement>(null)
  
  function animateCrest() {
    const housesOrder:(House | '')[] = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'hogwarts', '']
    toggleAnimating(true)

    housesOrder.forEach((house, index) => {
      setTimeout(() => {
        if (index !== 0) unanimateHouse(housesOrder[index - 1]) // Skip unanimation on first iteration
        if (index !== 5) animateHouse(house)                    // Skip animation of '' on last iteration
        if (index === 5) {                                      // Close house selector on last iteration
          toggleHouseSelector(false)
          toggleAnimating(false)
        }
      }, 400 * (index + 1))
    })
  }
  
  useEffect(() => {
    if (isHacked) {
      toggleAnimating(true)
      mist.current?.classList.add('appear')
    }
  }, [isHacked])

  useEffect(() => {
    animateCrest()
  }, [])

  return (
    <footer className={ (showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={ (showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={() => toggleHouseSelector()} className={ (animating ? '[&>*]:pointer-events-none pointer-events-none ' : '[&>*]:cursor-pointer  cursor-pointer ') + (showHouseSelector ? 'w-[20rem] sm:w-[30rem]' : '[&>*]:pointer-events-none w-[6rem] mb-20') + ' hogwarts-crest-container grid mx-auto duration-500'}>
        <img className='hogwarts-crest-frame' src='images/hogwarts-parts/hogwarts-frame.svg'/>
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
        <img onAnimationEnd={() => animateCrest()} ref={mist} src='images/hogwarts-parts/imperio-mist.svg' alt='imperio mist' className='w-0 place-self-center z-20'/>
      </div>
    </footer>
  )
}