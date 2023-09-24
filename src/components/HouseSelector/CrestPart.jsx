import { useTheme } from '../../context/'
import { animateHouse, unanimateHouse } from '../../utils/housing'
import PropTypes from 'prop-types';

CrestPart.propTypes = {
  house: PropTypes.string,
  part: PropTypes.string
}

export default function CrestPart({ house, part = '' }) {
  const { updateTheme } = useTheme()

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