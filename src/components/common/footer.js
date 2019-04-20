import React from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from './icon';
const footer = ({ active }) => {
  const { t } = useTranslation();
  const datas = [
    {
      link: '/',
      text: 'Mua bán',
      icon: 'ic_buySale'
    },
    {
      link: '/buy/',
      text: 'Sản phẩm',
      icon: 'ic_product'
    },
    {
      link: '/user/',
      text: 'Tài sản',
      icon: 'ic_assets'
    },
    {
      link: '/trade/',
      text: 'Quản lý GD',
      icon: 'ic_tradingM'
    }
  ];
  return (
    <div className="footer-wrapper fixed-bottom">
      {_.map(datas, (item, index) => (
        <Link key={index} to={item.link} className={active === item.link && 'active'}>
          <Icon name={item.icon} height="35" />
          {t(item.text)}
        </Link>
      ))}
    </div>
  );
};
footer.propTypes = {
  active: PropTypes.string
};
export default footer;
