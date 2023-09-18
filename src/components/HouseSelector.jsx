import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

export default function HouseSelector({ showHouseSelector, toggleHouseSelector }) {
  const theme = useContext(ThemeContext)

  return (
    <footer className={ (showHouseSelector ? 'h-full' : 'h-20') + ` bg-${theme}-dark` + ' fixed z-20 bottom-0 w-full grid place-content-center duration-500' }>
      <p className={ (showHouseSelector ? 'scale-100 mb-8' : 'scale-0 mb-0') + ' text-3xl sm:text-4xl text-center duration-200'}>Select a House</p>
      <div onClick={toggleHouseSelector} className={ (showHouseSelector ? 'w-[20rem] sm:w-[30rem]' : '[&>*]:pointer-events-none w-[6rem] mb-20') + ' hogwarts-crest-container grid mx-auto cursor-pointer duration-500'}>
        <img className="hogwarts-crest-frame" src="src/assets/hogwarts-parts/hogwarts-frame.svg"/>
        <img id="gryffindor-colour" className="hogwarts-crest-red" src="src/assets/hogwarts-parts/hogwarts-colours/hogwarts-red.svg"/>
        <img id="slytherin-colour" className="hogwarts-crest-green" src="src/assets/hogwarts-parts/hogwarts-colours/hogwarts-green.svg"/>
        <img id="hufflepuff-colour" className="hogwarts-crest-yellow" src="src/assets/hogwarts-parts/hogwarts-colours/hogwarts-yellow.svg"/>
        <img id="ravenclaw-colour" className="hogwarts-crest-blue" src="src/assets/hogwarts-parts/hogwarts-colours/hogwarts-blue.svg"/>
        <img id="gryffindor-part" className="hogwarts-crest-gryffindor" src="src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-gryffindor.svg"/>
        <img id="slytherin-part" className="hogwarts-crest-slytherin" src="src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-slytherin.svg"/>
        <img className="hogwarts-crest-hufflepuff-body" src="src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-hufflepuff-body.svg"/>
        <img id="hufflepuff-part" className="hogwarts-crest-hufflepuff-head" src="src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-hufflepuff-head.svg"/>
        <img id="ravenclaw-part" className="hogwarts-crest-ravenclaw" src="src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-ravenclaw.svg"/>
        <img id="hogwarts-part" className="hogwarts-crest-insignia" src="src/assets/hogwarts-parts/hogwarts-insignia.svg"/>
      </div>
    </footer>
  )
}