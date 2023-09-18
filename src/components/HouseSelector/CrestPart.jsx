import { animateHouse } from "../../utils/housing"

export default function CrestPart({ house }) {
  return (
    <img
      onMouseEnter={() => animateHouse(house)}
      id={`${house}-part`}
      className={`hogwarts-crest-${house}`}
      src={`src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-${house}.svg`}
    />
  )
}