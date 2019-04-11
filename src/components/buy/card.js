import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../common/icon';
import { currency } from '../../utils/currency';

const card = props => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <Link to={'/buy/' + props.item.bondCode} className="btn-transparent text-truncate">
            {props.item.bondCode}
          </Link>
          <span className="link">
            <span className="badge badge-danger">
              {currency(props.item.termRate)}%/{t('năm')}
            </span>
            <Link to={'/buy/' + props.item.bondCode}>
              <Icon name="arrow" width="18" height="24" />
            </Link>
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Đang còn')}
          <p className="float-right">
            <span className="quatity">{currency(props.item.roomBalance)}</span> {t('Trái phiếu')}
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node
};
export default card;
