import React from 'react';
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
