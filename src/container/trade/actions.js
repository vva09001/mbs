import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { FormatTime } from 'utils/moment';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import tradeActions from 'store/trade/actions';
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
        title={this.state.type === 'edit' ? t('Sửa giao dịch bán') : t('Bán Trái phiếu')}
      >
        {this.state.status && (
          <Popup
            closeText="KHÔNG"
            viewText="CÓ"
            showClosePopup={() => this._toggleState()}
            showViewPopup={() => this._onClick()}
          >
            <span>
              <i>{this.state.type === 'edit' ? t('editConFirm?') : t('caneConFirm')}</i>
            </span>
          </Popup>
        )}
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
              <div className="col-12 col-form-div fwb">I. {t('Thông tin Trái phiếu sở hữu')}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày giao dịch')}:</div>
              <div className="col-6 mdata">{detail.buyDate}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày đáo hạn')}:</div>
              <div className="col-6 mdata">{detail.maturityDate}</div>
            </div>
            <div className="form-group row">
              <div className="col-6  npdr">{t('Số lượng TP sở hữu')}:</div>
              <div className="col-6 mdata">
                {currency(detail.buyVol)} {t('Trái phiếu')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Đơn giá mua')}:</div>
              <div className="col-6 mdata">
                {currency(detail.buyPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Giá trị đầu tư')}:</div>
              <div className="col-6 mdata">
                {currency(detail.buyValue)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="form-group sum-field row">
              <div className="col-12 col-form-div fwb">
                II. {t('Đề nghị giao dịch bán Trái phiếu')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày đề nghị bán')}:</div>
              <div className="col-6 mdata">{FormatTime(this.state.date)}</div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Ngày giao dịch bán')}:</div>
              <div className="col-6 mdata">
                <span className=" date">
                  {this.state.type === 'edit' ? this._sellDate() : detail.sellDate}
                </span>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Đơn giá bán')}:</div>
              <div className="col-6 mdata">
                {currency(info.sellPrice)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Lãi suất')}:</div>
              <div className="col-6 mdata">
                {currency(info.termRate)} {t('%/năm')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Số lượng Trái phiếu')}:</div>
              <div className="col-6 mdata">
                {currency(info.sellVol)} {t('Trái phiếu')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">{t('Tổng giá trị bán')}</div>
              <div className="col-6 col-form-div text-blod date mdata">
                {currency(info.sellValue)} {t('VNĐ')}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">
                <i>{t('Tỷ lệ thuế TNCN (%)')}</i>
              </div>
              <div className="col-6 mdata">
                <i>{currency(info.taxPit)}%</i>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-6 col-form-div">
                <i>{t('Giá trị thuế TNCN')}</i>
              </div>
              <div className="col-6 mdata">
                <i>
                  {currency(info.taxValue)} {t('VNĐ')}
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="button-fixed">
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
