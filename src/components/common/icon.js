import React from 'react';
import PropTypes from 'prop-types';
const Icon = props => {
  return (
    <svg
      style={props.style}
      width={props.width}
      height={props.height}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={'/img/' + props.name + '.svg#svg-reference'} stroke="colorIcon" />
    </svg>
  );
};
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};
export default Icon;
