import { useThemeUpdater } from "../../context/ThemeContext"
import { animateHouse, unanimateHouse } from "../../utils/housing"

export default function CrestPart({ house, part = '' }) {
  const updateTheme = useThemeUpdater()

  return (
    <img
      onClick={() => updateTheme(house)}
      onMouseEnter={ () => animateHouse(house) }
      onMouseLeave={ () => unanimateHouse(house) }
      id={ `${house}${part}-part` }
      className={ house === 'hogwarts' ? 'hogwarts-crest-insignia' : `hogwarts-crest-${house}${part}` }
      src={ house === 'hogwarts' ? 'src/assets/hogwarts-parts/hogwarts-insignia.svg' : `src/assets/hogwarts-parts/hogwarts-mascots/${house}${part}.svg` }
    />
  )
}