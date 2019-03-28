import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './icon';
const footer = () => {
  const { t } = useTranslation();
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
footer.propTypes = {};
export default footer;
