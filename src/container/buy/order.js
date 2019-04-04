import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import buyActions from '../../store/buy/actions';
import { FormatTime } from '../../utils/moment';
import Layout from '../layout/layout';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      toggle: {
        checkbox: false
      }
    };
  }
  onCheckBox = () => {
    this.setState({
      toggle: {
        checkbox: !this.state.toggle.checkbox
      }
    });
  };
  _updateBuy = () => {
    this.props.update();
  };
  render() {
    const { bond, info, book } = this.props;
    return (
      <Layout type={1} title="XÁC THỰC GIAO DỊCH MUA">
        <div className="bond-detail">
          <h2 className="text-center color-1 mb-4">THÔNG TIN VỀ GIAO DỊCH</h2>
          <table className="table table-bordered bg-white">
            <tbody>
              <tr>
                <td width="50%">Mã trái phiếu:</td>
                <td width="50%">{bond.bondName}</td>
              </tr>
              <tr>
                <td>Ngày giao dịch TP:</td>
                <td>{FormatTime(book.date)}</td>
              </tr>
              <tr>
                <td>Ngày đáo hạn TP:</td>
                <td>{bond.maturityDate}</td>
              </tr>
              <tr>
                <td>Số lượng trái phiếu đăng ký mua:</td>
                <td>{book.amount} Trái Phiếu</td>
              </tr>
              <tr>
                <td>Đơn giá mua:</td>
                <td>{info.buyPrice} VND/ Trái Phiếu</td>
              </tr>
              <tr>
                <td>Phí giao dịch:</td>
                <td>{info.buyFee} VND</td>
              </tr>
              <tr>
                <td>
                  <b>Tổng tiền đầu tư:</b>
                </td>
                <td>
                  <b>{book.sum} VND</b>
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
            </tbody>
          </table>
          <div className="term-condition">
            <Link to="/buy/info">Thông tin trái phiếu</Link>
            <br />
            <Link to="/buy/term">Điều khoản và điều kiện đăng ký mua</Link>
            <br />
            <Link to="/buy/flow">Chi tiết dòng tiền</Link>
          </div>
          <label className="form-check-label">
            <strong>
              <i>
                Tôi xác nhận rằng tôi đã đọc và đống ý với các điều khoản và điều kiện của đăng ký
                trái phiếu được nêu trên đây.
              </i>
            </strong>
            <input type="checkbox" onChange={() => this.onCheckBox()} />
            <span className="checkmark" />
          </label>
          <div className="row justify-content-center">
            <div className="col-9">
              <button
                type="button"
                onClick={() => this._updateBuy()}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
                disabled={!this.state.toggle.checkbox}
              >
                XÁC NHẬN
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Order.propTypes = {
  bond: PropTypes.object,
  info: PropTypes.object,
  book: PropTypes.object,
  update: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Buy.info,
    book: state.Buy.book
  };
};

const mapDispatchToProps = {
  update: buyActions.update
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
