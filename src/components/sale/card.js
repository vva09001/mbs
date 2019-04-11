import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Icon from '../common/icon';

const { t } = useTranslation();

const card = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <button
            className="btn-transparent text-truncate"
            onClick={() => history.push({ pathname: '/sell/order/' + props.item.bondCode })}
          >
            {props.item.bondCode}
          </button>
          <span className="link">
            <button
              onClick={() => history.push({ pathname: '/sell/order/' + props.item.bondCode })}
            >
              <Icon name="arrow" width="18" height="24" />
            </button>
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày giao dịch mua')}
          <span className="float-right">{props.item.buyDate}</span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Số lượng TP sở hữu')}
          <p className="float-right">
            <span className="quatity">{props.item.buyVol}</span> {t('TP')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Giá trị đầu tư')}
          <p className="float-right">
            <span className="quatity">{props.item.buyValue}</span> {t('VND')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Lãi suất')}
          <p className="float-right">
            <span className="quatity quatity-text">{props.item.termRate}</span>
            %/
            {t('năm')}
          </p>
        </li>
        <li className="list-group-item justify-content-center">
          <div className="col-9">
            <button
              onClick={() => history.push({ pathname: '/sell/order/' + props.item.bondCode })}
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
            >
              BÁN
            </button>
          </div>
        </li>
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
