import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const header = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row">
      <div className="col-2">
        <button className="navbar-toggler filter" type="button">
          <img src="/img/menu.png" height="20" alt="menu" />
        </button>
      </div>
      <div className="col-8 text-center">
        <h3 className="text-uppercase">{t(title)}</h3>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
