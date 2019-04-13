import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { currency } from '../../utils/currency';

import Icon from '../common/icon';

const { t } = useTranslation();

const card = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <button className="btn-transparent text-truncate">{props.item.bondCode}</button>
          <span className="link">
            <Icon name="arrow" width="18" height="24" />
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.bondCode}</span>
        </li>
        <li className="list-group-item">
          {t('Ngày bán trước hạn(dự kiến)')}
          <span className="float-right">{props.item.sellDate}</span>
        </li>
        <li className="list-group-item">
          {t('Giá trị tiền đầu tư')}
          <p className="float-right">
            <span className="quatity">{currency(props.item.buyValue)}</span> {t('VND')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Tiền nhận được sau đầu tư')}
          <p className="float-right">
            <span className="quatity">{currency(props.item.sellValue)}</span> {t('VND')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Lãi suất đầu tư')}
          <p className="float-right">
            <span className="quatity quatity-text">{currency(props.item.termRate)}</span>%/{t('năm')}
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  t: PropTypes.func,
  children: PropTypes.node
};
export default card;
