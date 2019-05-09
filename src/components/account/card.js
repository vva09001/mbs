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
            className="link btn-transparent linkSell"
          >
            <Icon name="arrow" width="18" height="24" />
          </button>
        </li>
        <li className="list-group-item">
          {t('Ngày Giao Dịch (Mua)')}
          <span className="float-right">{props.item.buyDate}</span>
        </li>
        <li className="list-group-item">
          {props.item.isShell === 0
            ? t('Ngày Kết Thúc Đầu Tư')
            : t('Ngày Kết Thúc Đầu Tư (Dự Kiến)')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Khối Lượng')}
          <p className="float-right">
            <span className="quatity">
              {currency(props.item.buyVol)} {t('Trái Phiếu')}
            </span>
          </p>
        </li>
        <li className="list-group-item">
          {t('Giá Trị Đầu Tư')}
          <p className="float-right">
            <span className="quatity">
              {currency(props.item.buyValue)} {t('VNĐ')}
            </span>
          </p>
        </li>
        <li className="list-group-item">
          {t('Giá Trị Nhận Sau Đầu Tư')}
          <p className="float-right">
            <span className="quatity">
              {currency(props.item.sellValue)} {t('VNĐ')}
            </span>
          </p>
        </li>
        <li className="list-group-item">
          {t('Lợi Suất')}
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
