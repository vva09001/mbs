import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { FormatTime } from 'utils/moment';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import { tradeActions } from 'store/actions';
import Popup from 'components/common/popup-done';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'cancel',
      date: new Date(),
      params: {},
      status: false
    };
  }
  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
      params: {
        sellDate: this.props.detail.sellDate
      }
    });
  }
  _toggleState = () => {
    this.setState({
      status: !this.state.status
    });
  };
  _onChange = e => {
    const value = e.target.value;
    this.setState(
      {
        params: {
          sellDate: value
        }
      },
      () => {
        this.props.getInfo({
          sellDate: value,
          contractCode: this.props.info.buyContractCode
        });
      }
    );
  };
  _sellDate = () => {
    return (
      <select
        className="form-control"
        onChange={this._onChange.bind(this)}
        value={this.props.info.sellDate}
      >
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
  _onClick = () => {
    if (this.state.type === 'edit') {
      this.props.change(this.state.params);
    } else {
      this.props.delete();
    }
  };
  render() {
    const { detail, t, info } = this.props;
    return (
      <Layout
        type={2}
        title={this.state.type === 'edit' ? 'fixed_sale_transactions' : 'sell_bonds'}
      >
        {this.state.status && (
          <Popup
            closeText="no"
            viewText="yes"
            showClosePopup={() => this._toggleState()}
            showViewPopup={() => this._onClick()}
          >
            <span>
              <i>{this.state.type === 'edit' ? t('editConFirm') : t('cancelConFirm')}</i>
            </span>
          </Popup>
        )}
        <div
          className={
            this.state.type === 'edit'
              ? 'bond-detail bond-detail-edit'
              : 'bond-detail bond-detail-cancel'
          }
        >
          <div className="section">
            <div className="row">
              <div className="col-12">
                <h3>{detail.bondCode}</h3>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="sum-field titles row">
              <div className="col-form-div fwb">{t('Property_Bond_Information')}</div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('trading_day_(Buy)')}</div>
              <div className="col-6 mdata">{detail.buyDate}</div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('investment_end_date')}</div>
              <div className="col-6 mdata">{detail.maturityDate}</div>
            </div>
            <div className="row">
              <div className="col-6  npdr">{t('mass')} </div>
              <div className="col-6 mdata">
                {currency(detail.buyVol)} {t('bonds')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('transaction_price_unit')}</div>
              <div className="col-6 mdata">
                {currency(detail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('transaction_value')}</div>
              <div className="col-6 mdata">
                {currency(detail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="sum-field titles row">
              <div className="col-form-div fwb">{t('proposal_to_sell_bonds')}</div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('Offer_date_for_sale')}</div>
              <div className="col-6 mdata">{FormatTime(this.state.date)}</div>
            </div>
            <div className="row">
              <div
                className={
                  this.state.type === 'edit' ? 'col-6 col-form-div lh35' : 'col-6 col-form-div'
                }
              >
                {t('trading_day_(sale)')}
              </div>
              <div className="col-6 mdata">
                <span className=" date">
                  {this.state.type === 'edit' ? this._sellDate() : detail.sellDate}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('transaction_price_unit')}</div>
              <div className="col-6 mdata">
                {currency(info.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('yield')}</div>
              <div className="col-6 mdata">
                {currency(info.termRate)}
                {t('%/year')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">{t('mass')}</div>
              <div className="col-6 mdata">
                {currency(info.sellVol)} {t('bonds')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div date">{t('transaction_value')}</div>
              <div className="col-6 col-form-div text-blod date mdata">
                {currency(info.sellValue)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">
                <i>{t('pit_rate_(%)')}</i>
              </div>
              <div className="col-6 mdata">
                <i>{currency(info.taxPit)}%</i>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-form-div">
                <i>{t('pit_rate')}</i>
                <br />
                <i>{t('payment_by_MBS')}</i>
              </div>
              <div className="col-6 mdata">
                <i>
                  {currency(Math.round(info.taxValue))} {t('VNĐ')}
                </i>
              </div>
            </div>
          </div>
        </div>
        <div id="btn-fixed" className="button-fixed">
          <div className="wapper-button">
            <button
              type="button"
              onClick={() => this._toggleState()}
              className={
                this.state.type === 'edit'
                  ? 'btn btn-primary rounded-pill border-0 btn-lg btn-block'
                  : 'btn btn-danger rounded-pill border-0 btn-lg btn-block'
              }
            >
              {this.state.type === 'edit' ? t('edit_sell') : t('canecl_Sell')}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Actions.propTypes = {
  match: PropTypes.object,
  detail: PropTypes.object,
  info: PropTypes.object,
  sellDate: PropTypes.array,
  change: PropTypes.func,
  delete: PropTypes.func,
  getInfo: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    detail: state.Trade.detail,
    sellDate: state.Trade.date,
    info: state.Trade.info
  };
};

const mapDispatchToProps = {
  change: tradeActions.change,
  delete: tradeActions.delete,
  getInfo: tradeActions.getInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Actions));
