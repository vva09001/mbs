import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';
import buyActions from 'store/buy/actions';
import Popup from 'components/common/popup';
import { Section1, Section3, Section4 } from 'components/detail/section';
import Section2 from 'components/detail/section2';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        popup: false,
        table1: false,
        table2: false
      }
    };
  }

  componentDidMount() {}

  showPopup = type => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [type]: !this.state.toggle[type]
      }
    });
  };

  _setBuy = () => {
    this.props.update();
  };

  _onFetch = params => {
    this.props.buyFlowFetch(params);
    this.props.buyInfoFetch(params);
  };
  nonInvertRender() {
    const label = ['Nội dung', 'Ngày thanh toán', 'Tiền nhận (VNĐ)'];
    const content = ['content', 'payCouponDate', 'cashNonInvest'];
    return (
      <Section4
        title="Coupon TP, Tiền nhận cuối kỳ:"
        status={this.state.toggle.table1}
        refs="table1"
        onClick={this.showPopup}
        loading={this.props.buyFlowLoading}
        items={this.props.flow.flowNonInvest}
        label={label}
        content={content}
        sum={this.props.info.sumCashNoninvest}
      />
    );
  }
  invertRender() {
    const label = [
      'Ngày đầu tư',
      'Ngày kết thúc đầu tư',
      'Số tiền coupon tái đầu tư (VNĐ)',
      'Lãi tái đầu tư nhận được (VNĐ)'
    ];
    const content = ['payCouponDate', 'lastPayCouponDate', 'cashNonInvest', 'cashInvest'];
    return (
      <Section4
        title="Đã bao gồm tái đầu tư coupon:"
        status={this.state.toggle.table2}
        refs="table2"
        onClick={this.showPopup}
        loading={this.props.buyFlowLoading}
        items={this.props.flow.flowInvest}
        label={label}
        content={content}
        sum={this.props.info.sumCashInvest}
      />
    );
  }
  render() {
    const { t } = this.props;
    return (
      <Layout type={1} path="/" title="Đăng ký mua">
        {this.state.toggle.popup && (
          <Popup title="Thông tin Trái phiếu" showPopup={() => this.showPopup('popup')}>
            <p className="text-justify">
              <strong>{t('Coupon')}:</strong> Là lãi Trái Phiếu (đã trừ thuế thu nhập cá nhân (nếu
              có)) do Tổ Chức Phát Hành thanh toán. Lãi suất coupon và cách tính lãi coupon căn cứ
              theo quy định của Tổ Chức Phát Hành đối với Trái Phiếu.
            </p>
            <p className="text-justify">
              <strong>{t('Tái đầu tư coupon')}:</strong> Là việc Khách Hàng tiếp tục đầu tư khoản
              coupon nhận được vào các hạng mục đầu tư khác trong thời gian nắm giữ Trái Phiếu (ví
              dụ gửi tiết kiệm….)
            </p>
            <p className="text-justify">
              <strong>{t('Lãi suất đầu tư')}:</strong> Là lợi suất đầu tư Trái Phiếu Khách Hàng nhận
              được đã bao gồm tái đầu tư coupon (với giả định Khách Hàng tiếp tục đầu tư khoản
              coupon với lãi suất 7.2%/năm)
            </p>
          </Popup>
        )}
        <div className="bond-detail">
          <Section1 item={this.props.bond} loading={this.props.bondLoading} />
          <form>
            <Section2
              volMin={this.props.info.buyVolMin}
              volMax={this.props.bond.roomBalance}
              price={this.props.info.buyPrice}
              date={this.props.info.buyDate}
              code={this.props.info.bondCode}
              onFetch={this._onFetch}
              loading={this.props.buyLoading}
              params={this.props.params}
              handleParam={this.props.updateParams}
            />
            <Section3
              showPopup={this.showPopup}
              item={this.props.info}
              loading={this.props.buyLoading}
            />
          </form>
          <div className="row mb-1">
            <label className="col-12 col-form-label clb">
              <strong>{t('TỔNG TIỀN NHẬN ĐƯỢC (DỰ KIẾN)')}</strong>
            </label>
          </div>
          {this.nonInvertRender()}
          {this.invertRender()}
        </div>
        <div className="button-fixed">
          <div className="wapper-button">
            <button
              type="button"
              onClick={() => this._setBuy()}
              className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block"
            >
              {t('MUA')}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Detail.propTypes = {
  bond: PropTypes.object,
  bondLoading: PropTypes.bool,
  buyLoading: PropTypes.bool,
  buyFlowLoading: PropTypes.bool,
  info: PropTypes.object,
  flow: PropTypes.object,
  flowCash: PropTypes.object,
  setBuy: PropTypes.func,
  buyFlowFetch: PropTypes.func,
  buyInfoFetch: PropTypes.func,
  update: PropTypes.func,
  match: PropTypes.object,
  profile: PropTypes.object,
  params: PropTypes.object,
  updateParams: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Buy.info,
    flow: state.Buy.flow,
    flowCash: state.Buy.flowCash,
    bondLoading: state.Bonds.loading,
    buyLoading: state.Buy.loading,
    buyFlowLoading: state.Buy.loading_flow,
    profile: state.Account.profile,
    params: state.Buy.params
  };
};

const mapDispatchToProps = {
  buyFlowFetch: buyActions.getFlow,
  buyInfoFetch: buyActions.getInfo,
  update: buyActions.update,
  updateParams: buyActions.updateParams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Detail));
