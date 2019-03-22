import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from '../../utils/history';
const header = ({ t, title, path }) => {
  return (
    <div className="header-wrapper fixed-top row align-items-center">
      <div className="col-4">
        <button className="navbar-toggler filter" type="button" onClick={() => history.push({ pathname: path })}>
          <img src="/img/chevron-left.png" height="20" alt="back"/>
        </button>
      </div>
      <div className="col-4 text-center">
        <h3 className="text-uppercase">{t(title)}</h3>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.string,
  t: PropTypes.func
};
export default withTranslation()(header);
