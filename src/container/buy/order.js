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
    const { bond, info, t } = this.props;
    return (
      <Layout type={1} title={t('MUA TRÁI PHIẾU')}>
        <div className="bond-detail">
          <h4 className="text-center mtitle">{t('Đăng Ký Mua Trái Phiếu')}</h4>
          <table className="table table-bordered bg-white">
            <tbody>
              <tr className="bgg">
                <td width="50%">{t('Trái Phiếu')}</td>
                <td width="50%">{bond.bondCode}</td>
              </tr>
              <tr>
                <td>{t('Ngày Giao Dịch')}</td>
                <td>{info.buyDate}</td>
              </tr>
              <tr>
                <td>{t('Ngày Đáo Hạn')}</td>
                <td>{info.maturityDate}</td>
              </tr>
              <tr>
                <td>{t('Khối lượng')}</td>
                <td>
                  {currency(info.buyVol)} {t('Trái Phiếu')}
                </td>
              </tr>
              <tr>
                <td>{t('Đơn Giá Giao Dịch')}</td>
                <td>
                  {currency(info.buyPrice)} {t('VNĐ')}/{t('Trái Phiếu')}
                </td>
              </tr>
              <tr>
                <td>{t('Giá Trị Giao Dịch')}</td>
                <td>
                  {currency(info.buyValue)} {t('VNĐ')}
                </td>
              </tr>
              <tr>
                <td>{t('Thuế, Phí Giao Dịch')} </td>
                <td>
                  {currency(info.buyFee)} {t('VNĐ')}
                </td>
              </tr>
              <tr className="bgg">
                <td>{t('Tổng Giá Trị Giao Dịch')}</td>
                <td>
                  {currency(info.buyValue + info.buyFee)} {t('VNĐ')}
                </td>
              </tr>
              <tr>
                <td>{t('Lợi suất chưa tái đầu tư')}</td>
                <td>
                  <b>
                    {currency(info.termNoninvest)}
                    {t('%/năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Lợi suất đã tái đầu tư')}</td>
                <td>
                  <b>
                    {currency(info.termInvest)}
                    {t('%/năm')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('Ngày thanh toán lãi')}</td>
                <td className="text-justify">
                  {t('Tiền lãi Trái Phiếu được trả sau, định kỳ mỗi')} {info.couponPayment}{' '}
                  {t('tháng một lần vào ngày cuối cùng của mỗi Kỳ Tính Lãi')}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="term-condition">
            <Link to="/buy/info">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('Thông tin Trái Phiếu')}</i>
            </Link>
            <br />
            <Link to="/buy/term">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('Điều khoản & Điều kiện mua Trái Phiếu')}</i>
            </Link>
            <br />
            <Link to="/buy/flow">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('Chi tiết dòng tiền')}</i>
            </Link>
          </div>
          <label className="form-check-label">
            <i>
              {t(
                'Tôi xác nhận và đồng ý với các điều khoản, điều kiện mua Trái Phiếu đã nêu trên và các Văn Kiện Trái Phiếu liên quan.'
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
