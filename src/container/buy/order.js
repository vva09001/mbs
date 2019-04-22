import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import history from 'utils/history';
import Layout from 'container/layout/layout';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      toggle: {
        checkbox: true
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
  render() {
    const { bond, info, contract, t } = this.props;
    return (
      <Layout type={1} title="Xác thực giao dịch mua">
        <div className="bond-detail">
          <h4 className="text-center text-uppercase mtitle">{t('THÔNG TIN VỀ GIAO DỊCH')}</h4>
          <table className="table table-bordered bg-white">
            <tbody>
              <tr className="bgg">
                <td width="50%">{t('Mã Trái phiếu')}:</td>
                <td width="50%">{bond.bondCode}</td>
              </tr>
              <tr>
                <td>{t('Ngày giao dịch TP')}:</td>
                <td>{info.buyDate}</td>
              </tr>
              <tr>
                <td>{t('Ngày đáo hạn TP')}:</td>
                <td>{bond.maturityDate}</td>
              </tr>
              <tr>
                <td>{t('Số lượng Trái phiếu đăng ký mua')}:</td>
                <td>
                  {currency(contract.buyVol)} {t('Trái phiếu')}
                </td>
              </tr>
              <tr>
                <td>{t('Đơn giá mua')}:</td>
                <td>
                  {currency(info.buyPrice)} {t('VND')}/ {t('Trái phiếu')}
                </td>
              </tr>
              <tr className="bgg">
                <td>{t('Tổng tiền đầu tư')}:</td>
                <td>
                  {currency(contract.buyValue)} {t('VND')}
                </td>
              </tr>
              <tr>
                <td>{t('Phí giao dịch')}:</td>
                <td>
                  {currency(info.buyFee)} {t('VND')}
                </td>
              </tr>
              <tr>
                <td>{t('Lãi suất đầu tư (chưa bao gồm tái đầu tư coupon)')}:</td>
                <td>
                  <b>
                    {currency(info.termNoninvest)}
                    {t('%/năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Lãi suất đầu tư (đã bao gồm tái đầu tư coupon)')}:</td>
                <td>
                  <b>
                    {currency(info.termInvest)}
                    {t('%/năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Ngày thanh toán lãi')}:</td>
                <td>
                  {t('Tiền lãi Trái phiếu được trả sau, định kỳ mỗi')} {info.couponPayment}{' '}
                  {t('tháng một lần vào ngày cuối cùng của mỗi Kỳ Tính Lãi')}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="term-condition">
            <Link to="/buy/info">
              <i>{t('Thông tin Trái phiếu')}</i>
            </Link>
            <br />
            <Link to="/buy/term">
              <i>{t('Điều khoản và điều kiện đăng ký mua')}</i>
            </Link>
            <br />
            <Link to="/buy/flow">
              <i>{t('Chi tiết dòng tiền')}</i>
            </Link>
          </div>
          <label className="form-check-label">
            <i>
              {t(
                'Tôi xác nhận và đồng ý với các điều khoản và điều kiện mua Trái phiếu đã nêu trên.'
              )}
            </i>
            <input
              type="checkbox"
              onChange={() => this.onCheckBox()}
              checked={this.state.toggle.checkbox}
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className="button-fixed">
          <div className="wapper-button">
            <button
              type="button"
              onClick={() => history.push({ pathname: '/buy/confirm/' })}
              className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block"
              disabled={!this.state.toggle.checkbox}
            >
              {t('XÁC NHẬN')}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Order.propTypes = {
  bond: PropTypes.object,
  info: PropTypes.object,
  contract: PropTypes.object,
  flowCash: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Buy.info,
    contract: state.Buy.contract,
    flowCash: state.Buy.flowCash
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Order));
