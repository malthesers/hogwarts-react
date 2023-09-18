import { animateHouse, unanimateHouse } from "../../utils/housing"

export default function CrestPart({ house }) {
  return (
    <img
      onMouseEnter={() => animateHouse(house)}
      onMouseLeave={() => unanimateHouse(house)}
      id={`${house}-part`}
      className={`hogwarts-crest-${house}`}
      src={`src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-${house}.svg`}
    />
  )
}