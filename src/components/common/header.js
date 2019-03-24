import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from './icon';
const header = props => {
  const { t } = props;
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end">
      <div className="col-4 text-center">
        <h3 className="text-uppercase">{t(props.title)}</h3>
      </div>
      <div className="col-4 text-right">
        <div className="dropdown">
          <button className="navbar-toggler filter" type="button">
            <Icon name="filter" width="20" height="20" />
            {t('Lọc')}
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              SL TP đang còn
            </a>
            <a className="dropdown-item" href="#">
              Lãi suất
            </a>
            <a className="dropdown-item" href="#">
              Ngày đáo hạn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func
};
export default withTranslation()(header);
