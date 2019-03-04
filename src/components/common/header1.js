import React from 'react';
const header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
      >
        <i class="fas fa-angle-left"></i>
      </button>
      <a className="navbar-brand" href="#">
        MBS
      </a>
      <button className="navbar-toggler" type="button">
        <i className="fas fa-search" />
      </button>
    </nav>
  );
};
export default header;
