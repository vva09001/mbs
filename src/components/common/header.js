import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from './icon';
const header = ({ title, toggle, onToggle, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end">
      <div className="col-6 text-center">
        <h3 className="text-uppercase">{t(title)}</h3>
      </div>
      <div className="col-3 text-right">
        <div className="dropdown">
          <button onClick={() => onToggle()} className="navbar-toggler filter" type="button">
            <Icon name="filter" width="20" height="20" />
            {t('Lọc')}
          </button>
          {toggle && (
            <div
              className="dropdown-menu dropdown-menu-right show"
              aria-labelledby="dropdownMenuButton"
            >
              <button
                onClick={() => {
                  onClick({ num: 40, page: 1, order: 0 });
                  onToggle();
                }}
                className="dropdown-item"
              >
                {t('Lãi suất giảm dần')}
              </button>
              <button
                onClick={() => {
                  onClick({ num: 40, page: 1, order: 1 });
                  onToggle();
                }}
                className="dropdown-item"
              >
                {t('Ngày đáo hạn tăng dần')}
              </button>
              <button
                onClick={() => {
                  onClick({ num: 40, page: 1, order: 2 });
                  onToggle();
                }}
                className="dropdown-item"
              >
                {t('Số lượng Trái phiếu giảm dần')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
  onToggle: PropTypes.func
};
export default header;
