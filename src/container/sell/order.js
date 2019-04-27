import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { FormatTime } from 'utils/moment';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import sellActions from 'store/sell/actions';

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
      <Layout type={2} title={t('BÁN TRÁI PHIẾU')}>
        <div className="bond-detail sellorder">
          <div className="section">
            <div className="row">
              <div className="col-12 mspot">
                <h3>{info.bondCode}</h3>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="sum-field row">
              <label className="col-12 mstit">
                <b>{t('Thông Tin Trái Phiếu Sở hữu')}</b>
              </label>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Ngày giao dịch mua')}:</label>
              <div className="col-6 mdata">{sellDetail.buyDate}</div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Ngày đáo hạn')}:</label>
              <div className="col-6 mdata">{sellDetail.maturityDate}</div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Khối Lượng')}:</label>
              <div className="col-6 mdata">
                {currency(sellDetail.buyVol)} {t('TP')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Đơn GIá Giao Dịch')}:</label>
              <div className="col-6 mdata">
                {currency(sellDetail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Giá Trị Đầu Tư')}:</label>
              <div className="col-6 mdata">
                {currency(sellDetail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="sum-field row">
              <label className="col-12 mstit">
                <b>{t('Đề nghị giao dịch bán Trái phiếu')}</b>
              </label>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Ngày đề nghị bán')}:</label>
              <div className="col-6 mdata">{FormatTime(this.state.date)}</div>
            </div>
            <div className="row">
              <label className="col-6 lh38">{t('Ngày giao dịch')}:</label>
              <div className="col-6 mdata">
                <div className="form-group">{this._sellDate()}</div>
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Đơn Giá Giao Dịch')}:</label>
              <div className="col-6 mdata">
                {currency(info.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Lợi suất đầu tư')}:</label>
              <div className="col-6 mdata">
                {currency(info.termRate)} {t('%/năm')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Khối Lượng')}:</label>
              <div className="col-6 mdata">
                {currency(info.sellVol)} {t('TP')}
              </div>
            </div>
            <div className="sum-field row">
              <label className="col-6 mspot">{t('Giá Trị Giao Dịch')}</label>
              <label className="col-6 mdata mspot text-bold">
                {currency(info.sellValue)} {t('VNĐ')}
              </label>
            </div>
            <div className="row fw13">
              <label className="col-6">
                <i>{t('Tỷ lệ thuế TNCN (%)')}</i>
              </label>
              <div className="col-6 mdata">
                <i>{currency(info.taxPit)}</i>
              </div>
              <label className="col-6">
                <i>{t('Thuế TNCN (Do MBS chi trả)')}</i>
              </label>
              <div className="col-6 mdata">
                <i>
                  {currency(info.taxValue)} {t('VNĐ')}
                </i>
              </div>
            </div>
            <div className="term-condition">
              <img alt="popup-click" src="/img/ic_info_16x16.svg" className="mr-2" />
              <Link to="/sell/term">
                <i>{t('Điều khoản & Điều kiện bán Trái Phiếu')}</i>
              </Link>
            </div>
            <label className="form-check-label">
              <i>
                {t(
                  'Tôi xác nhận và đồng ý với các điều khoản, điều kiện bánTrái Phiếu đã nêu trên và các Văn Kiện Trái Phiếu liên quan.'
                )}
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
        <div className="button-fixed">
          <div className="wapper-button">
            <button
              onClick={() => this._onBook()}
              type="button"
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
              disabled={!this.state.toggle.checkbox}
            >
              {t('BÁN')}
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
