import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from './icon';
const header = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end">
      <div className="col-6 text-center">
        <h3 className="text-uppercase">{t(title)}</h3>
      </div>
      <div className="col-3 text-right">
        <div className="dropdown">
          <button className="navbar-toggler filter" type="button">
            <Icon name="filter" width="20" height="20" />
            {t('Lọc')}
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item">{t('SL TP đang còn')}</button>
            <button className="dropdown-item">{t('Lãi suất')}</button>
            <button className="dropdown-item">{t('Ngày đáo hạn')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
