import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from './icon';
const header = props => {
  const { t } = props;
  return (
    <div className="header-wrapper fixed-top row justify-content-end">
      <div className="col-4 text-center">
        <h3>{t(props.title)}</h3>
      </div>
      <div className="col-4 text-right">
        <button className="navbar-toggler filter" type="button">
          <Icon name="filter" width="20" height="20" />
          {t('Lọc')}
        </button>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func
};
export default withTranslation()(header);
