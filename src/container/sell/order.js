import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import history from '../../utils/history';
import Layout from '../layout/layout';
// import bondsActions from '../../store/coin/actions';

class Order extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type={2} title="Bán Trái Phiếu">
        <div className="bond-detail">
          <div className="section">
            <div className="row">
              <div className="col-12">
                <h3>
                  NVL1235860
                </h3>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">I. Thông tin Trái phiếu sở hữu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch:</label>
              <div className="col-6">

              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đáo hạn TP:</label>
              <div className="col-6">

              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng TP sở hữu:</label>
              <div className="col-6">

              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá mua:</label>
              <div className="col-6">

              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Giá trị đầu tư:</label>
              <div className="col-6">
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">II. Đề nghị giao dịch bán trái phiếu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đề nghị bán:</label>
              <div className="col-6">
                Thứ sáu 03/11/2019
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch bán:</label>
              <div className="col-6">
              01/04/2019
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá bán:</label>
              <div className="col-6">
                <strong>104,985 VND</strong>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng TP:</label>
              <div className="col-6">
                2,000
              </div>
            </div>
            <div className="form-group sum-field row">
              <label className="col-6 col-form-label">Tổng giá trị bán</label>
              <label className="col-6 col-form-label">210,284,955 VND</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label"><i>Tỷ lệ thuế TNCN (%)</i></label>
              <div className="col-6">
              <i>Tỷ lệ thuế TNCN (%)</i>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label"><i>Giá trị thuế TNCN</i></label>
              <div className="col-6">
              <i>210,285 VND</i>
              </div>
            </div>
            <button
              type="button"
              onClick={() => history.push({ pathname: '/bonds/buy/order' })}
              className="btn btn-primary btn-lg btn-block"
            >
              Đặt lệnh bán
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Order.propTypes = {
  bonds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
