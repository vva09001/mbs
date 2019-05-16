import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
const header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper no-shadow fixed-top align-items-center row">
      <div className="col-2 text-left pl-2">
        <button
          className="navbar-toggler back-togger filter"
          type="button"
          onClick={() => history.goBack()}
        >
          <img src="/img/ic_back.svg" height="16" alt="back" />
        </button>
      </div>
      <div className="col-8 col-sm-11 text-center">
        <h3 className="uppc">{t('buying_and_selling_bonds')}</h3>
      </div>
      <div className="col-2" />
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
