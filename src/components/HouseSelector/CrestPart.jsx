import { animateHouse, unanimateHouse } from "../../utils/housing"

export default function CrestPart({ house, part = '' }) {
  return (
    <img
      onMouseEnter={() => animateHouse(house)}
      onMouseLeave={() => unanimateHouse(house)}
      id={`${house}-part`}
      className={`hogwarts-crest-${house}${part}`}
      src={`src/assets/hogwarts-parts/hogwarts-mascots/hogwarts-${house}${part}.svg`}
    />
  )
}