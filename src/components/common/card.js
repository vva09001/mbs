import React from 'react';
import PropTypes from 'prop-types';
import history from '../../utils/history';
const card = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item title">
          {props.item.title}
          <span className="link">
            <span className="badge badge-danger">{props.item.percent}% /năm</span>
            <a onClick={() => history.push({ pathname: '/coin-detail/' + props.item.id })}>
              <img alt="next" src="img/arrow.png" />
            </a>
          </span>
        </li>
        <li className="list-group-item">
          Ngày đáo hạn
          <span className="float-right">{props.item.date}</span>
        </li>
        <li className="list-group-item">
          Đang còn
          <p className="float-right">
            <span className="quatity">{props.item.quatity}</span> trái phiếu
          </p>
        </li>
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object
};
export default card;
