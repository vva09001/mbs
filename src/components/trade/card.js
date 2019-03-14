import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Icon from '../common/icon';
const card = props => {
  const { t } = props;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          {t(props.item.title)}
          <span className="link">
            <a onClick={() => history.push({ pathname: '/bonds/' + props.item.id })}>
              <Icon name="arrow" width="18" height="24" />
            </a>
          </span>
        </li>
        <li className="list-group-item">
          {t('Ngày đáo hạn')}
          <span className="float-right">{props.item.date}</span>
        </li>
        <li className="list-group-item">
          {t('Ngày bán trước hạn(dự kiến)')}
          <span className="float-right">{props.item.date}</span>
        </li>
        <li className="list-group-item">
          Giá trị tiền đầu tư
          <p className="float-right">
            <span className="quatity">1,125,698,356</span> VND
          </p>
        </li>
        <li className="list-group-item">
          Tiền nhận được sau đầu tư
          <p className="float-right">
            <span className="quatity">1,125,698,356</span> VND
          </p>
        </li>
        <li className="list-group-item">
          Lãi suất đầu tư
          <p className="float-right">
            <span className="quatity quatity-text">10</span>%/năm
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
