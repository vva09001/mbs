import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { FormatTime } from 'utils/moment';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import tradeActions from 'store/trade/actions';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'cancel',
      date: new Date(),
      params: {}
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
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      params: {
        sellDate: value
      }
    });
  };
  _sellDate = () => {
    return (
      <select className="form-control form-control-trade" onChange={this._onChange.bind(this)}>
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
    const { detail, t } = this.props;
    return (
      <Layout
        type={2}
        title={this.state.type === 'edit' ? t('Sửa giao dịch bán') : t('Bán Trái phiếu')}
      >
        <div
          className={
            this.state.type === 'edit'
              ? t('bond-detail bond-detail-edit')
              : t('bond-detail bond-detail-cancel')
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
            <div className="form-group sum-field row">
              <div className="col-12 col-form-div">I. {t('Thông tin Trái phiếu sở hữu')}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày giao dịch')}:</div>
              <div className="col-6">{detail.buyDate}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày đáo hạn TP')}:</div>
              <div className="col-6">{detail.maturityDate}</div>
            </div>
            <div className="form-group row">
              <div className="col-6  npdr">{t('Số lượng TP sở hữu')}:</div>
              <div className="col-6">
                {currency(detail.buyVol)} {t('Trái phiếu')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Đơn giá mua')}:</div>
              <div className="col-6">
                {currency(detail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Giá trị đầu tư')}:</div>
              <div className="col-6">
                {currency(detail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="form-group sum-field row">
              <div className="col-12 col-form-div">II. {t('Đề nghị giao dịch bán Trái phiếu')}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày đề nghị bán')}:</div>
              <div className="col-6">{FormatTime(this.state.date)}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày giao dịch bán')}:</div>
              <div className="col-6">
                <p className=" date">
                  {this.state.type === 'edit' ? this._sellDate() : detail.sellDate}
                </p>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Đơn giá bán')}:</div>
              <div className="col-6">
                {currency(detail.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Số lượng Trái phiếu')}:</div>
              <div className="col-6">
                {currency(detail.sellVol)} {t('Trái phiếu')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Tổng giá trị bán')}</div>
              <div className="col-6 col-form-div text-blod date">
                {currency(detail.sellValue)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">
                <i>{t('Tỷ lệ thuế TNCN (%)')}</i>
              </div>
              <div className="col-6">
                <i>{currency(detail.taxPit)}%</i>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">
                <i>{t('Giá trị thuế TNCN')}</i>
              </div>
              <div className="col-6">
                <i>
                  {currency(detail.taxValue)} {t('VNĐ')}
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="button-fixed">
          <div className="wapper-button">
            <button
              type="button"
              onClick={() => this._onClick()}
              className={
                this.state.type === 'edit'
                  ? 'btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block'
                  : 'btn btn-danger bg-gradient-primary rounded-pill border-0 btn-lg btn-block'
              }
            >
              {this.state.type === 'edit' ? t('SỬA BÁN') : t('HUỶ BÁN')}
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
  sellDate: PropTypes.array,
  change: PropTypes.func,
  delete: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    detail: state.Trade.detail,
    sellDate: state.Trade.date
  };
};

const mapDispatchToProps = {
  change: tradeActions.change,
  delete: tradeActions.delete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Actions));
