import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../../utils/history';
import Layout from '../../layout/layout';

class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout type title="Đặt lệnh mua">
        <div className="bond-detail">
          <h2 className="text-center color-1">Thông tin về giao dịch</h2>
          <table className="table table-bordered bg-white">
            <tr>
              <td width="50%">Mã trái phiếu:</td>
              <td width="50%">NVL012020</td>
            </tr>
            <tr>
              <td>Ngày giao dịch TP:</td>
              <td>23/01/2019</td>
            </tr>
            <tr>
              <td>Ngày đáo hạn TP:</td>
              <td>31/12/2020</td>
            </tr>
            <tr>
              <td>Số lượng trái phiếu đăng ký mua:</td>
              <td>2,000 Trái Phiếu</td>
            </tr>
            <tr>
              <td>Đơn giá mua:</td>
              <td>104,985 VND/ Trái Phiếu</td>
            </tr>
            <tr>
              <td>Phí giao dịch:</td>
              <td>0 VND</td>
            </tr>
            <tr>
              <td>
                <b>Tổng tiền đầu tư:</b>
              </td>
              <td>
                <b>210,284,955 VND</b>
                <br />
                <i>
                  (bằng chữ hai trăm mười triệu hai trăm tám mươi bốn ngàn chín trăm năm mươi lăm
                  đồng Việt Nam)
                </i>
              </td>
            </tr>
            <tr>
              <td>Lãi suất đầu tư (chưa bao gồm tái đầu tư coupon):</td>
              <td>8.11%/năm</td>
            </tr>
            <tr>
              <td>Lãi suất đầu tư (đã bao gồm tái đầu tư coupon):</td>
              <td>
                <b>8.91%/năm</b>
              </td>
            </tr>
            <tr>
              <td>Ngày thanh toán lãi:</td>
              <td>
                Tiền lãi Trái Phiếu được trả sau, định kỳ mỗi [.....] tháng một lần vào ngày cuối
                cùng của mỗi kỳ tình lãi
              </td>
            </tr>
            <tr>
              <td>Mã trái phiếu:</td>
              <td>NVL012020</td>
            </tr>
          </table>
          <div className="term-condition">
            <a href="">Thông tin trái phiếu</a>
            <br />
            <a href="">Điều khoản và điều kiện đăng ký mua</a>
            <br />
            <a href="">Chi tiết dòng tiền</a>
          </div>
          <label className="form-check-label">
            Tôi xác nhận rằng tôi đã đọc và đống ý với các điều khoản và điều kiện của đăng ký mua
            trái phiếu được nêu trên đây.
            <input type="checkbox" value="" />
            <span className="checkmark" />
          </label>
          <button
            type="button"
            onClick={() => history.push({ pathname: '/bonds/buy/order' })}
            className="btn btn-primary btn-lg btn-block"
          >
            Đặt lệnh mua
          </button>
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
