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
  render() {
    const { bond, info, contract, flowCash, t } = this.props;
    return (
      <Layout type={1} title="XÁC THỰC GIAO DỊCH MUA">
        <div className="bond-detail">
          <h4 className="text-center color-1 mb-4 text-uppercase">{t('THÔNG TIN VỀ GIAO DỊCH')}</h4>
          <table className="table table-bordered bg-white">
            <tbody>
              <tr>
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
              <tr>
                <td>
                  <b>{t('Tổng tiền đầu tư')}:</b>
                </td>
                <td>
                  <b>
                    {currency(contract.buyValue)} {t('VND')}
                  </b>
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
                    {currency(flowCash.interestRef)}
                    %/
                    {t('năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Lãi suất đầu tư (đã bao gồm tái đầu tư coupon)')}:</td>
                <td>
                  <b>
                    {currency(flowCash.interestCouponPercent)}
                    %/
                    {t('năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Ngày thanh toán lãi')}:</td>
                <td>
                  {info.couponPayment} {t('tháng')}/{t('lần')}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="term-condition">
            <Link to="/buy/info">{t('Thông tin Trái phiếu')}</Link>
            <br />
            <Link to="/buy/term">{t('Điều khoản và điều kiện đăng ký mua')}</Link>
            <br />
            <Link to="/buy/flow">{t('Chi tiết dòng tiền')}</Link>
          </div>
          <label className="form-check-label">
            <strong>
              <i>
                {t(
                  'Tôi xác nhận rằng tôi đã đọc và đồng ý với các điều khoản và điều kiện của đăng ký'
                )}
                {t('Trái phiếu được nêu trên đây.')}
              </i>
            </strong>
            <input type="checkbox" onChange={() => this.onCheckBox()} />
            <span className="checkmark" />
          </label>
          <div className="row justify-content-center">
            <div className="col-9">
              <button
                type="button"
                onClick={() => history.push({ pathname: '/buy/confirm/' })}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
                disabled={!this.state.toggle.checkbox}
              >
                {t('XÁC NHẬN')}
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
