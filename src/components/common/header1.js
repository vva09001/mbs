import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
const header = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center">
      <div className="col-1">
        <button className="navbar-toggler filter" type="button" onClick={() => history.goBack()}>
          <img src="/img/chevron-left.png" height="20" alt="back" />
        </button>
      </div>
      <div className="col-10 text-center p-0">
        <h3 className="text-uppercase">{t(title)}</h3>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func
};
export default header;
