import { House } from '../../interfaces/House'

interface CrestColourProps {
  house: House
}

type Colours = {
  [key in House]?: string
}

export default function CrestColour({ house }: CrestColourProps) {
  const colours:Colours = {
    gryffindor: 'red',
    slytherin: 'green',
    hufflepuff: 'yellow',
    ravenclaw: 'blue'
  }

  return (
    <img id={`${house}-colour`} className={`hogwarts-crest-${colours[house]}`} src={`images/hogwarts-parts/hogwarts-colours/hogwarts-${colours[house]}.svg`}/>
  )
}