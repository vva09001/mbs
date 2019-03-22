import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import _ from 'lodash';
import Loading from '../common/loading';

const Section1 = props => {
  if(props.loading){
    return (
      <Loading />
    )
  }
  return (
    <div className="section">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">
            {props.item.bondName} <img src="/img/popup-icon.png" />
          </h3>
          <div className="row">
            <div className="col-6">
              <h4>Ngày đáo hạn</h4>
              <h5>{props.item.maturityDate}</h5>
            </div>
            <div className="col-6 text-right">
              <h4>Hạn mức</h4>
              <h5>
                <span>{props.item.roomBalance}</span> trái phiếu
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool
};

const Section3 = props => {
  if(props.loading){
    return (
      <Loading />
    )
  }
  return (
    <div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Lãi suất đáo hạn</label>
        <div className="col-6 text-right col-form-label">
          <span>{props.item.termRate}</span>
          <small>%/năm</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Thời gian nắm giữ</label>
        <div className="col-6 text-right col-form-label">
          <small>{props.item.numInvestDate} ngày</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Lãi suất đầu tư</label>
        <div className="col-6 text-right col-form-label">
          <span>{props.item.reinvestmentRate}</span>
          <small>%/năm</small>
        </div>
      </div>
    </div>
  );
};

Section3.propTypes = {
  item: PropTypes.object
};

const Section4 = props => {
  const { title, onClick, status, refs} = props
  if(props.loading) {
    return (
      <Loading />
    )
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          {title} <span className="color">217,377,499 VND</span>
          <span onClick={() => onClick(refs)} className="float-right collapse-custom">
            {status ? '+' : '-'}
          </span>
        </div>
      </div>
      {status && (
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nội dung</th>
                  <th scope="col">Ngày thanh toán</th>
                  <th scope="col">Tiền nhận</th>
                </tr>
              </thead>
              <tbody>
                {_.map(props.item, item => (
                  <tr>
                    <td>{item.content}</td>
                    <td>{item.payCouponDate}</td>
                    <td>{item.cashNonInvest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Fragment>
  );
};
Section4.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  status: PropTypes.bool,
  refs: PropTypes.string,
  loading: PropTypes.bool
};
export { Section1, Section3, Section4 };
