import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Icon from './icon';

const header = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end pt-1">
      <div className="col-2 text-left">
        <button
          className="navbar-toggler back-togger filter"
          type="button"
          onClick={() => history.goBack()}
        >
          <Icon name="ic_back" width="20" height="20" />
        </button>
      </div>
      <div className="col-8 text-center p-0">
        <h3 className="uppc">{t(title)}</h3>
      </div>
      <div className="col-2" />
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func
};
export default header;
