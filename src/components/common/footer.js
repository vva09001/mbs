import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from './icon';
const footer = props => {
  const { t } = props;
  return (
    <div className="footer-wrapper fixed-bottom">
      <a className="col-3" href="#">
        <Icon name="mua-ban" height="35" />
        {t('Mua bán')}
      </a>
      <a className="col-3" href="#">
        <Icon name="san-pham" height="35" />
        {t('Sản phẩm')}
      </a>
      <a className="col-3" href="#">
        <Icon name="danh-muc" height="35" />
        {t('Danh mục')}
      </a>
      <a className="col-3" href="#">
        <Icon name="mua-ban" height="35" />
        {t('Quản lý')}
      </a>
    </div>
  );
};
footer.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(footer);
