import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Icon from './icon';
const header = ({ title, toggle, onToggle, onClick, filterPicked }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end">
      <div className="col-2 col-sm-1 text-center">
        <button className="navbar-toggler filter" type="button" onClick={() => history.goBack()}>
          <img src="/img/ic_back.svg" height="20" alt="back" />
        </button>
      </div>
      <div className="col-8 text-center">
        <h3 className="uppc">{t(title)}</h3>
      </div>
      <div className="col-2">
        <div className="dropdown">
          <button onClick={() => onToggle()} className="navbar-toggler filter" type="button">
            <Icon name="ic_filter" width="20" height="20" />
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
                className={filterPicked === 0 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('Lãi suất giảm dần')}
              </button>
              <button
                onClick={() => {
                  onClick({ num: 40, page: 1, order: 1 });
                  onToggle();
                  filterPicked = 1;
                }}
                className={filterPicked === 1 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('Ngày đáo hạn tăng dần')}
              </button>
              <button
                onClick={() => {
                  onClick({ num: 40, page: 1, order: 2 });
                  onToggle();
                  filterPicked = 2;
                }}
                className={filterPicked === 2 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('Số lượng trái phiếu giảm dần')}
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
  filterPicked: PropTypes.number,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
  onToggle: PropTypes.func
};
export default header;
