import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { currency } from 'utils/currency';

import Icon from 'components/common/icon';

const { t } = useTranslation();

const card = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <button
            onClick={() => props.onDetail(props.item.bondCode)}
            className="btn-transparent text-truncate btn-sell"
          >
            {props.item.bondCode}
          </button>
          <button
            onClick={() => props.onDetail(props.item.bondCode)}
            className="linkSell btn-transparent"
          >
            <Icon name="arrow" width="18" height="24" />
          </button>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Ngày bán trước hạn (dự kiến)')}
          <span className="float-right">{props.item.sellDate}</span>
        </li>
        <li className="list-group-item">
          {t('Giá trị tiền đầu tư')}
          <p className="float-right">
            <span className="quatity">
              {currency(props.item.buyValue)} {t('VNĐ')}
            </span>
          </p>
        </li>
        <li className="list-group-item">
          {t('Tiền nhận sau đầu tư')}
          <p className="float-right">
            <span className="quatity">
              {currency(props.item.sellValue)} {t('VNĐ')}
            </span>
          </p>
        </li>
        <li className="list-group-item">
          {t('Lợi suất đầu tư')}
          <p className="float-right">
            <span className="quatity quatity-text">{currency(props.item.termRate)}</span>
            <span className="quatity"> {t('%/năm')}</span>
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  onDetail: PropTypes.func,
  t: PropTypes.func,
  children: PropTypes.node
};
export default card;
