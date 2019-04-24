import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'components/common/icon';
import { currency } from 'utils/currency';

const card = props => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          <Link
            to={'/buy/' + props.item.bondCode}
            onClick={() => props.fetchDetail({ code: props.item.bondCode })}
            className="btn-transparent text-truncate"
          >
            {props.item.bondCode}
          </Link>
          <span className="link">
            <Link
              to={'/buy/' + props.item.bondCode}
              onClick={() => props.fetchDetail({ code: props.item.bondCode })}
            >
              <Icon name="arrow" width="18" height="24" />
            </Link>
          </span>
        </li>
        <li className="list-group-item">
          <span className="mlabel">{t('Lãi suất')}</span>
          <p className="float-right">
            <span className="clb ls">{currency(props.item.termRate)}%</span>
            <span className="clb">/{t('năm')}</span>
          </p>
        </li>
        <li className="list-group-item">
          <span className="mlabel">{t('Ngày đáo hạn')}</span>
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          <span className="mlabel">{t('Hạn mức')}</span>
          <p className="float-right">
            <span className="clb">{currency(props.item.roomBalance)}</span>
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
  fetchDetail: PropTypes.func
};
export default card;
