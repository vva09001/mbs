import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon from './icon';
const footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-wrapper fixed-bottom">
      <Link to="/">
        <Icon name="mua-ban" height="35" />
        {t('Mua bán')}
      </Link>
      <Link to="/buy/">
        <Icon name="san-pham" height="35" />
        {t('Sản phẩm')}
      </Link>
      <Link to="//trade/">
        <Icon name="danh-muc" height="35" />
        {t('Tài sản')}
      </Link>
      <Link to="/trade/">
        <Icon name="mua-ban" height="35" />
        {t('Quản lý')}
      </Link>
    </div>
  );
};
footer.propTypes = {};
export default footer;
