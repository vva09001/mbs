import React from 'react';
import PropTypes from 'prop-types';
const header = props => {
  return (
    <div className="header-wrapper fixed-top row justify-content-end">
      <div className="col-6 text-center"><h3>{props.title}</h3></div>
      <div className="col-3 text-right">
        <button className="navbar-toggler filter" type="button">
          <img alt="filter" src="/img/filter.png" />Lọc
        </button>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
