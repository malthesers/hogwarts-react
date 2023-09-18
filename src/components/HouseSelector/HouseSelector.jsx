import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import CrestPart from "./CrestPart";
import CrestColour from "./CrestColour";

export default function HouseSelector({ showHouseSelector, toggleHouseSelector }) {
  const theme = useContext(ThemeContext)

  return (
    <footer className={ (showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={ (showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={toggleHouseSelector} className={ (showHouseSelector ? 'w-[20rem] sm:w-[30rem]' : '[&>*]:pointer-events-none w-[6rem] mb-20') + ' hogwarts-crest-container grid mx-auto cursor-pointer duration-500'}>
        <img className="hogwarts-crest-frame" src="src/assets/hogwarts-parts/hogwarts-frame.svg"/>
        <CrestColour house='gryffindor'/>
        <CrestColour house='slytherin'/>
        <CrestColour house='hufflepuff'/>
        <CrestColour house='ravenclaw'/>
        <CrestPart house='gryffindor' />
        <CrestPart house='slytherin' />
        <CrestPart house='hufflepuff-body'/>
        <CrestPart house='hufflepuff' />
        <CrestPart house='ravenclaw' />
        <CrestPart house='hogwarts' />
      </div>
    </footer>
  )
}