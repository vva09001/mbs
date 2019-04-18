import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper no-shadow fixed-top align-items-center row">
      <div className="col-2 col-sm-1 text-center">
        <button className="navbar-toggler filter" type="button">
          <img src="/img/chevron-left.png" height="20" alt="back" />
        </button>
      </div>
      <div className="col-10 col-sm-11 text-center">
        <h3 className="text-uppercase">{t('Mua bán trái phiếu')}</h3>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
