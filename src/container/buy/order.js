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
      <Layout type={1} title={t('buy_bonds')}>
        <div className="bond-detail">
          <h4 className="text-center mtitle">{t('register_to_buy_bonds')}</h4>
          <table className="table table-bordered bg-white">
            <tbody>
              <tr className="bgg">
                <td width="50%">{t('bonds')}</td>
                <td width="50%">{bond.bondCode}</td>
              </tr>
              <tr>
                <td>{t('day_trading')}</td>
                <td>{info.buyDate}</td>
              </tr>
              <tr>
                <td>{t('investment_end_date')}</td>
                <td>{info.maturityDate}</td>
              </tr>
              <tr>
                <td>{t('mass')}</td>
                <td>
                  {currency(info.buyVol)} {t('bonds')}
                </td>
              </tr>
              <tr>
                <td>{t('transaction_price_unit')}</td>
                <td>
                  {currency(info.buyPrice)} {t('VNĐ')}/{t('bonds')}
                </td>
              </tr>
              <tr>
                <td>{t('transaction_value')}</td>
                <td>
                  {currency(info.buyValue)} {t('VNĐ')}
                </td>
              </tr>
              <tr>
                <td>{t('tax_transaction_fees')} </td>
                <td>
                  {currency(info.buyFee)} {t('VNĐ')}
                </td>
              </tr>
              <tr className="bgg">
                <td>{t('total_transaction_value')}</td>
                <td>
                  {currency(info.buyValue + info.buyFee)} {t('VNĐ')}
                </td>
              </tr>
              <tr>
                <td>{t('the_yield_has_not_reinvested')}</td>
                <td>
                  <b>
                    {currency(info.termNoninvest)}
                    {t('%/year')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('the_yield_has_reinvested')}</td>
                <td>
                  <b>
                    {currency(info.termInvest)}
                    {t('%/year')}
                  </b>
                </td>
              </tr>
              <tr>
                <td>{t('interest_payment_date')}</td>
                <td className="text-justify">
                  {t('couponPayment_info_01')} {info.couponPayment} {t('couponPayment_info_02')}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="term-condition">
            <Link to="/buy/info">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('bond_information')}</i>
            </Link>
            <br />
            <Link to="/buy/term">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('bond_terms_and_conditions')}</i>
            </Link>
            <br />
            <Link to="/buy/flow">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <i>{t('cash_flow_details')}</i>
            </Link>
          </div>
          <label className="form-check-label">
            <i>
              {t('order_buy_confirm_01')} {''}
              {t('sign')}
              {t('order_buy_confirm_02')}
              {t('sign')} {''}
              {t('order_buy_confirm_03')}
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
              {t('confirm')}
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
