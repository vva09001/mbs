import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Icon from './icon';

const header = () => {
  const { t } = useTranslation();
  return (
    <div id="header" className="header-wrapper no-shadow fixed-top align-items-center row pt-1">
      <div className="col-2 text-left">
        <button
          className="navbar-toggler back-togger filter"
          type="button"
          onClick={() => history.goBack()}
        >
          <Icon name="ic_back" width="20" height="20" />
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
