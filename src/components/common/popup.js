import React from 'react';
import PropTypes from 'prop-types';
const popup = props => {
  return (
    <div className="popup">
      <div className="card">
        <div className="card-header">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
};
popup.propTypes = {
  title: popup.string
};
export default popup;
