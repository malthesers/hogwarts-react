import { animateHouse, unanimateHouse } from '../../utils/housing'
import { House } from '../../interfaces/House';
import { useTheme } from '../../context'

interface CrestPartProps {
  house: House,
  part?: string
}

export default function CrestPart({ house, part = '' }: CrestPartProps) {
  const { updateTheme } = useTheme()

  return (
    <img
      onClick={() => updateTheme(house)}
      onMouseEnter={ () => animateHouse(house) }
      onMouseLeave={ () => unanimateHouse(house) }
      id={ `${house}${part}-part` }
      className={ house === 'hogwarts' ? 'hogwarts-crest-insignia' : `hogwarts-crest-${house}${part}` }
      src={ house === 'hogwarts' ? 'images/hogwarts-parts/hogwarts-insignia.svg' : `images/hogwarts-parts/hogwarts-mascots/${house}${part}.svg` }
    />
  )
}