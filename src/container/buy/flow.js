import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import history from '../../utils/history';
import bondsActions from '../../store/bonds/actions';
import buyActions from '../../store/buy/actions';
import Popup from '../../components/common/popup';
import { Section1, Section3, Section4 } from '../../components/detail/section';
import Section2 from '../../components/detail/section2';

const Flow = props => {
  const path = '/buy/' + props.bond.bondCode;

  return (
    <Layout type={1} path={path} title="Xác thực giao dịch mua">
      <div className="buy-wrapper">
        <h2 className="text-center color-1">Dòng tiền nhận được khi mua trái phiếu</h2>
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              Từ ngày:
              <span className="text-info">
                <strong> 23/01/2019</strong>
              </span>
            </p>
            <p>
              Đến ngày:
              <span className="text-info">
                <strong> 23/01/2020</strong>
              </span>
            </p>
            <p>Quý khách sẽ nhận được dòng tiền dự kiến như sau:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
              <span>Dòng tiền - chưa bao gồm tái đầu tư coupon:</span>
            </div>
            <p className="mt-2 mb-2 text-primary">
              <strong>
                Lãi suất đầu tư: <span className="text-danger">7.20</span>%/năm
              </strong>
            </p>
            <table className="table table-bordered white-bg text-center">
              <thead>
                <tr className="text-primary">
                  <th>STT</th>
                  <th>Nội dung</th>
                  <th>Ngày thanh toán</th>
                  <th>Sô tiền thực nhận dự kiến (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Coupon Trái phiếu</td>
                  <td>14/08/2017</td>
                  <td>5.087.840</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>Tổng dòng tiền từ Trái phiếu</strong>
                  </td>
                  <td>
                    <h5 className="text-info">102.862.000</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
              <span>Dòng tiền - đã bao gồm tái đầu tư coupon:</span>
            </div>
            <p className="mt-2 mb-2 text-primary">
              <strong>
                Lãi suất đầu tư: <span className="text-danger">7.20</span>%/năm
              </strong>
            </p>
            <table className="table table-bordered white-bg text-center">
              <thead>
                <tr className="text-primary">
                  <th>STT</th>
                  <th>Số tiền coupon tái đầu từ (VND)</th>
                  <th>Ngày đầu tư</th>
                  <th>Ngày kết thúc</th>
                  <th>Lãi suất tái đầu tư</th>
                  <th>Lãi tái đầu tư nhận được (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5.086.840</td>
                  <td>14/08/2017</td>
                  <td>14/08/2017</td>
                  <td>7.20%/năm</td>
                  <td>7.20%/năm</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>Tổng dòng tiền từ Trái phiếu</strong>
                  </td>
                  <td>
                    <h5 className="text-info">102.862.000</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Flow.propTypes = {
  bond: PropTypes.object
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  buyFetch: buyActions.getBuy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flow);
