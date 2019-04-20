import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from 'components/common/icon';
import { currency } from 'utils/currency';

const { t } = useTranslation();

const card = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <button
            onClick={() => props.onDetail(props.item.bondCode)}
            className="btn-transparent text-truncate"
          >
            {props.item.bondCode}
          </button>
          <span className="link">
            <button onClick={() => props.onDetail(props.item.bondCode)}>
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
            <span className="quatity">{currency(props.item.buyVol)}</span> {t('TP')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Giá trị đầu tư')}
          <p className="float-right">
            <span className="quatity">{currency(props.item.buyValue)}</span> {t('VND')}
          </p>
        </li>
        <li className="list-group-item">
          {t('Lãi suất')}
          <p className="float-right">
            <span className="quatity quatity-text">{currency(props.item.termRate)}</span>
            %/
            {t('năm')}
          </p>
        </li>
        <li className="list-group-item justify-content-center">
          <div className="col-9">
            <button
              onClick={() =>
                props.onClick({
                  bondCode: props.item.bondCode,
                  contractCode: props.item.contractCode
                })
              }
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
            >
              {t('BÁN')}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  onDetail: PropTypes.func,
  t: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node
};
export default card;
