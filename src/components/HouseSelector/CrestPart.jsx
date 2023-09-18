import { animateHouse, unanimateHouse } from "../../utils/housing"

export default function CrestPart({ house }) {
  const src = house === 'hogwarts' ? 'src/assets/hogwarts-parts/hogwarts-insignia.svg' : `src/assets/hogwarts-parts/hogwarts-mascots/${house}.svg`;
  const className = house === 'hogwarts' ? 'hogwarts-crest-insignia' : `hogwarts-crest-${house}`

  return (
    <img
      onMouseEnter={() => animateHouse(house)}
      onMouseLeave={() => unanimateHouse(house)}
      id={`${house}-part`}
      className={className}
      src={src}
    />
  )
}