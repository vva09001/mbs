import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const header = props => {
  const { t } = props;
  return (
    <div className="header-wrapper fixed-top row align-items-center">
      <div className="col-4">
        <button className="navbar-toggler filter" type="button">
          <img src="/img/chevron-left.png" height="20" alt="back"/>
        </button>
      </div>
      <div className="col-4 text-center">
        <h3 className="text-uppercase">{t(props.title)}</h3>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func
};
export default withTranslation()(header);
