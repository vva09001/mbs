import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const Section1 = props => {
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
  item: PropTypes.object
};

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="form-group row">
        <label className="col-6 col-form-label">Ngày giao dịch</label>
        <div className="col-6">
          <DatePicker />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-6 col-form-label">Giá đơn mua</label>
        <div className="col-6">
          <div className="input-group">
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <div className="input-group-text">VND</div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-6 col-form-label">Số lượng TP mua</label>
        <div className="col-sm-6">
          <div className="input-group number-field">
            <button className="btn btn-light">+</button>
            <input type="number" className="form-control" />
            <button className="btn btn-light">-</button>
          </div>
        </div>
      </div>
      <div className="form-group sum-field row">
        <label className="col-6 col-form-label">GIÁ TRỊ ĐẦU TƯ</label>
        <div className="col-6">
          <div className="input-group">
            <input type="text" className="form-control" disabled value="510,760,000" />
            <div className="input-group-append">
              <div className="input-group-text">VND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Lãi suất đáo hạn</label>
        <div className="col-6 text-right col-form-label">
          <span>8</span>
          <small>%/năm</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Thời gian nắm giữ</label>
        <div className="col-6 text-right col-form-label">
          <small>365 ngày</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Lãi suất đầu tư</label>
        <div className="col-6 text-right col-form-label">
          <span>7,2</span>
          <small>%/năm</small>
        </div>
      </div>
    </div>
  );
};

const Section4 = ({ title, onClick, status, refs }) => {
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
                <tr>
                  <td>Coupon</td>
                  <td>02/04/2019</td>
                  <td>8,600,0000</td>
                </tr>
                <tr>
                  <td>Coupon</td>
                  <td>02/04/2019</td>
                  <td>8,600,0000</td>
                </tr>
                <tr>
                  <td>Giá trị KH nhận được cuối kỳ</td>
                  <td>02/04/2019</td>
                  <td>8,600,0000</td>
                </tr>
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
  refs: PropTypes.string
};
export { Section1, Section2, Section3, Section4 };
