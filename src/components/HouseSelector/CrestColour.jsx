import PropTypes from 'prop-types';

CrestColour.propTypes = {
  house: PropTypes.string
}

export default function CrestColour({ house }) {
  const colours = {
    gryffindor: 'red',
    slytherin: 'green',
    hufflepuff: 'yellow',
    ravenclaw: 'blue'
  }

  return (
    <img id={`${house}-colour`} className={`hogwarts-crest-${colours[house]}`} src={`images/hogwarts-parts/hogwarts-colours/hogwarts-${colours[house]}.svg`}/>
  )
}