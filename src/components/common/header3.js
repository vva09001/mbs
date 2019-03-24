import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const header = props => {
  const { t } = props;
  return (
    <div className="header-wrapper no-shadow fixed-top row">
      <div className="col-2 text-center">
        <button className="navbar-toggler filter" type="button">
          <img src="/img/chevron-left.png" height="20" alt="back"/>
        </button>
      </div>
      <div className="col-10 text-center">
        <div className="header-search">
          <i className="fa fa-search" />
          <input type="text" placeholder="Tìm kiếm ứng dụng"/>
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
