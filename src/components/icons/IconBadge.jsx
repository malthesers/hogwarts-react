import PropTypes from 'prop-types';

IconBadge.propTypes = {
  className: PropTypes.string
}

export default function IconBadge({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.5 159.73" className={className}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1" d="M129.73,84.22c-6.65,18-10,27-17.42,37.75a120.12,120.12,0,0,1-43.57,37.76A120.18,120.18,0,0,1,25.18,122c-7.46-10.71-10.77-19.74-17.42-37.75C-3,55.12-.11,47.28,2,43.56,5.55,37,12,33.69,16.47,31.94c.09-3.92.84-11.18,5.81-17.42,5.49-6.94,13.18-9,23.23-11.62A88.31,88.31,0,0,1,68.74,0,88.4,88.4,0,0,1,92,2.9c10,2.65,17.74,4.68,23.23,11.62,5,6.24,5.72,13.5,5.81,17.42,4.5,1.75,10.92,5.09,14.52,11.62C137.6,47.28,140.45,55.12,129.73,84.22Z"/>
        </g>
      </g>
    </svg>
  )
}