import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
const header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper no-shadow fixed-top align-items-center row">
      <div className="col-2 col-sm-1 text-center">
        <button className="navbar-toggler filter" type="button" onClick={() => history.goBack()}>
        <img src="/img/ic_back.svg" height="20" alt="back" />
        </button>
      </div>
      <div className="col-8 col-sm-11 text-center">
        <h3>{t('Mua bán trái phiếu')}</h3>
      </div>
      <div className="col-2">
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
