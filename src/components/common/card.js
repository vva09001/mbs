import React from 'react';
import PropTypes from 'prop-types';
const card = props => {
  return (
    <div className="card">
      <div className="card-header">
        {props.item.title} <i className="float-right fas fa-search" />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Ngày đáo hạn
          <span className="float-right">{props.item.date}</span>
        </li>
        <li className="list-group-item">
          Hạn mức
          <span className="float-right">{props.item.quatity}</span>
        </li>
        <li className="list-group-item">
          Lãi suất
          <span className="float-right">{props.item.percent}</span>
        </li>
      </ul>
    </div>
  );
};
card.propTypes = {
  item: PropTypes.object
};
export default card;
