import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Icon from './icon';
const card = props => {
  const { t } = props;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          {t(props.item.bondName)}
          <span className="link">
            <span className="badge badge-danger">
              {props.item.termRate}%/{t('năm')}
            </span>
            <a onClick={() => history.push({ pathname: '/bonds/' + props.item.bondCode })}>
              <Icon name="arrow" width="18" height="24" />
            </a>
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.maturityDate}</span>
        </li>
        <li className="list-group-item">
          {t('Đang còn')}
          <p className="float-right">
            <span className="quatity">{props.item.roomBalance}</span> {t('trái phiếu')}
          </p>
        </li>
        {props.children}
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object,
  t: PropTypes.func
};
export default withTranslation()(card);
