import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import bondsActions from 'store/bonds/actions';
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

  componentDidMount() {
    this.props.bondsDetail({
      code: this.props.match.params.code
    });
    this.props.buyFetch({
      code: this.props.match.params.code
    });
  }

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
    const label = ['Nội dung', 'Ngày thanh toán', 'Tiền nhận (VND)'];
    const content = ['content', 'payCouponDate', 'cashNonInvest'];
    return (
      <Section4
        title="Chưa bao gồm tái đầu tư coupon:"
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
      'Số tiền coupon tái đầu tư (VND)',
      'Ngày đầu tư',
      'Ngày kết thúc đầu tư',
      'Lãi tái đầu tư nhận được (VND)'
    ];
    const content = ['cashNonInvest', 'payCouponDate', 'lastPayCouponDate', 'cashInvest'];
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
            <p>
              <strong>{t('Coupon')}:</strong> {currency(this.props.bond.couponPayment)}
            </p>
            <p>
              <strong>{t('Tái đầu tư coupon')}:</strong> {currency(this.props.info.sumCashInvest)}
            </p>
            <p>
              <strong>{t('Lãi suất đầu tư')}:</strong> {currency(this.props.info.reinvestmentRate)}
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
          <div className="row justify-content-center">
            <div className="col-9">
              <button
                type="button"
                onClick={() => this._setBuy()}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
              >
                {t('ĐẶT LỆNH MUA')}
              </button>
            </div>
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
  bondsDetail: PropTypes.func,
  info: PropTypes.object,
  flow: PropTypes.object,
  flowCash: PropTypes.object,
  buyFetch: PropTypes.func,
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
  bondsDetail: bondsActions.detail,
  buyFetch: buyActions.getBuy,
  buyFlowFetch: buyActions.getFlow,
  buyInfoFetch: buyActions.getInfo,
  update: buyActions.update,
  updateParams: buyActions.updateParams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Detail));
