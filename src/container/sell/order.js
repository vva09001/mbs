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
    const { info, bond, t, sellDetail } = this.props;
    return (
      <Layout type={2} title="Đăng ký bán">
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
                <b>I. {t('Thông tin Trái phiếu sở hữu')}</b>
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
              <label className="col-6 ">{t('Số lượng TP')}:</label>
              <div className="col-6 mdata">{currency(sellDetail.buyVol)}</div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Đơn giá mua')}:</label>
              <div className="col-6 mdata">
                {currency(sellDetail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Giá trị đầu tư')}:</label>
              <div className="col-6 mdata">
                {currency(sellDetail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="sum-field row">
              <label className="col-12 mstit">
                <b>II. {t('Đề nghị giao dịch bán Trái phiếu')}</b>
              </label>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Ngày đề nghị bán')}:</label>
              <div className="col-6 mdata">{FormatTime(this.state.date)}</div>
            </div>
            <div className="row">
              <label className="col-6 lh38">{t('Ngày giao dịch bán')}:</label>
              <div className="col-6 mdata">
                <div className="form-group">{this._sellDate()}</div>
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Đơn giá bán')}:</label>
              <div className="col-6 mdata">
                {currency(info.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Lãi suất')}:</label>
              <div className="col-6 mdata">
                {currency(info.termRate)} {t('%/năm')}
              </div>
            </div>
            <div className="row">
              <label className="col-6 ">{t('Số lượng TP')}:</label>
              <div className="col-6 mdata">{currency(info.sellVol)}</div>
            </div>
            <div className="sum-field row">
              <label className="col-6 mspot">{t('TỔNG GIÁ TRỊ BÁN')}</label>
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
                <i>{t('Giá trị thuế TNCN')}</i>
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
                <i>{t('Điều khoản & điều kiện đăng ký bán')}</i>
              </Link>
            </div>
            <label className="form-check-label">
              <i>
                {t(
                  'Tôi xác nhận và đồng ý với các điều khoản và điều kiện mua Trái phiếu đã nêu trên. Và các văn kiện Trái phiếu liên quan.'
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
