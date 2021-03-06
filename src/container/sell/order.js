import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { FormatTime } from 'utils/moment';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import { sellActions } from 'store/actions';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      toggle: {
        checkbox: true
      },
      params: {}
    };
  }

  componentDidMount() {
    this.setState({
      params: {
        ...this.state.params,
        sellDate: this.props.sellDate[0].termDate,
        contractCode: this.props.info.buyContractCode
      }
    });
  }
  _onCheckBox = () => {
    this.setState({
      toggle: {
        checkbox: !this.state.toggle.checkbox
      }
    });
  };
  _onChange = e => {
    const value = e.target.value;
    this.setState(
      {
        params: {
          ...this.state.params,
          sellDate: value
        }
      },
      () => {
        this.props.getInfo({
          contractCode: this.props.info.buyContractCode,
          sellDate: this.state.params.sellDate
        });
      }
    );
  };
  _onBook = () => {
    this.props.book(this.state.params);
  };
  _sellDate = () => {
    return (
      <select className="form-control" onChange={this._onChange.bind(this)}>
        {_.map(this.props.sellDate, (item, index) => {
          return (
            <option key={index} value={item.termDate}>
              {item.termDate}
            </option>
          );
        })}
      </select>
    );
  };
  render() {
    const { info, t, sellDetail } = this.props;
    return (
      <Layout type={2} title="sell_bonds">
        <div className="bond-detail sellorder">
          <div className="row row-padding">
            <div className="col-12">
              <h4 className="text-center">{t('register_to_sell_Bonds')}</h4>
            </div>
          </div>
          <div className="section">
            <div className="row row-padding">
              <div className="col-12 mspot">
                <h4 className="text-center">
                  {t('bonds')} : {info.bondCode}
                </h4>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="sum-field titles row row-padding">
              <div className="msti">
                <b>{t('Property_Bond_Information')}</b>
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('trading_day_(Buy)')} </div>
              <div className="col-6 mdata">{sellDetail.buyDate}</div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('Investment_end_date')} </div>
              <div className="col-6 mdata">{sellDetail.maturityDate}</div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('mass')} </div>
              <div className="col-6 mdata">
                {currency(sellDetail.buyVol)} {t('bonds')}
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('transaction_price_unit')} </div>
              <div className="col-6 mdata">
                {currency(sellDetail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('investment_value')} </div>
              <div className="col-6 mdata">
                {currency(sellDetail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="sum-field titles row row-padding">
              <div className="mstit">
                <b>{t('register_to_sell_Bonds')}</b>
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('Offer_date_for_sale')} </div>
              <div className="col-6 mdata">{FormatTime(this.state.date)}</div>
            </div>
            <div className="row row-padding">
              <div className="col-6 lh38">{t('trading_day_(sale)')} </div>
              <div className="col-6 mdata">
                <div className="form-group">{this._sellDate()}</div>
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('transaction_price_unit')} </div>
              <div className="col-6 mdata">
                {currency(info.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('Yield')} </div>
              <div className="col-6 mdata">
                {currency(info.termRate)}
                {t('%/year')}
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6 ">{t('mass')} </div>
              <div className="col-6 mdata">
                {currency(info.sellVol)} {t('bonds')}
              </div>
            </div>
            <div className="sum-field row row-padding">
              <div className="col-6 mspot font-weight-bold">{t('transaction_value')} </div>
              <div className="col-6 mdata mspot font-weight-bold">
                {currency(info.sellValue)} {t('VNĐ')}
              </div>
            </div>
            <div className="row row-padding">
              <div className="col-6">
                <i>{t('pit_rate_(%)')} </i>
              </div>
              <div className="col-6 mdata">
                <i>
                  {currency(info.taxPit)}
                  {t('%')}
                </i>
              </div>
            </div>
            <div className="row row-padding fw13">
              <div className="col-6">
                <i>{t('pit_rate')} </i>
                <br />
                <i>{t('payment_by_MBS')}</i>
              </div>
              <div className="col-6 mdata">
                <i>
                  {currency(Math.round(info.taxValue))} {t('VNĐ')}
                </i>
              </div>
            </div>
            <div className="term-condition">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <Link to="/sell/term">
                <i>{t('terms_and_conditions_for_selling_bonds')}</i>
              </Link>
            </div>
            <label className="form-check-label">
              <i>
                {t('order_buy_confirm_01')} {''}
                {t('sign')}
                {t('order_sell_confirm')}
                {t('sign')} {''}
                {t('order_buy_confirm_03')}
              </i>
              <input
                type="checkbox"
                onChange={() => this._onCheckBox()}
                checked={this.state.toggle.checkbox}
              />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div id="btn-fixed" className="button-fixed">
          <div className="wapper-button">
            <button
              onClick={() => this._onBook()}
              type="button"
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
              disabled={!this.state.toggle.checkbox}
            >
              {t('sell')}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Order.propTypes = {
  info: PropTypes.object,
  bond: PropTypes.object,
  sellDate: PropTypes.array,
  book: PropTypes.func,
  getInfo: PropTypes.func,
  sellDetail: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    sellDetail: state.Sell.detail,
    info: state.Sell.info,
    sellDate: state.Sell.date
  };
};

const mapDispatchToProps = {
  getInfo: sellActions.getInfo,
  book: sellActions.book
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Order));
