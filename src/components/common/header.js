import React from 'react';
const header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample01"
        aria-controls="navbarsExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
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
