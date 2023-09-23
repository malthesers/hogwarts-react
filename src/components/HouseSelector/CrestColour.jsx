import PropTypes from 'prop-types';

CrestColour.propTypes = {
  className: PropTypes.string
}

export default function CrestColour({ house }) {
  const colours = {
    gryffindor: 'red',
    slytherin: 'green',
    hufflepuff: 'yellow',
    ravenclaw: 'blue'
  }

  return (
    <img id={`${house}-colour`} className={`hogwarts-crest-${colours[house]}`} src={`src/assets/hogwarts-parts/hogwarts-colours/hogwarts-${colours[house]}.svg`}/>
  )
}