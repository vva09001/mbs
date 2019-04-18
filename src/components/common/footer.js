import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon from './icon';
const footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-wrapper fixed-bottom">
      <Link to="/">
        <Icon name="ic_buy_sale" height="35" />
        {t('Mua bán')}
      </Link>
      <Link to="/buy/">
        <Icon name="ic_product" height="35" />
        {t('Sản phẩm')}
      </Link>
      <Link to="/user/">
        <Icon name="mua" height="35" />
        {t('Tài sản')}
      </Link>
      <Link to="/trade/">
        <Icon name="ic_tradingM" height="35" />
        {t('Quản lý GD')}
      </Link>
    </div>
  );
};
footer.propTypes = {};
export default footer;
