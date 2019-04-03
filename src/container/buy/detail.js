import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Layout from '../layout/layout';
import history from '../../utils/history';
import { FormatTime } from '../../utils/moment';
import bondsActions from '../../store/bonds/actions';
import buyActions from '../../store/buy/actions';
import Popup from '../../components/common/popup';
import { Section1, Section3, Section4 } from '../../components/detail/section';
import Section2 from '../../components/detail/section2';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        popup: false,
        table1: true,
        table2: true
      },
      params: {
        date: new Date(),
        amount: 0,
        sum: 0
      }
    };
  }

  componentDidMount() {
    this.props.bondsDetail({
      userId: this.props.profile.id,
      channel: 'VT',
      code: this.props.match.params.code
    });
    this.props.buyFetch({
      userId: this.props.profile.id,
      channel: 'VT',
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

  handleParam = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    });
  };
  nonInvertRender() {
    return (
      <Section4
        title="Đã bao gồm tái đầu tư coupon:"
        status={this.state.toggle.table2}
        refs="table2"
        onClick={this.showPopup}
        loading={this.props.buyLoading}
        item={this.props.flow.invest}
      >
        <thead>
          <tr>
            <th width="33%">Nội dung</th>
            <th width="33%">Ngày thanh toán</th>
            <th width="33%">Tiền nhận (VND)</th>
          </tr>
        </thead>
        <tbody>
          {_.map(this.props.flow.flowNonInvest, item => (
            <tr key={item.cashNonInvest}>
              <td>{item.content}</td>
              <td>{item.payCouponDate}</td>
              <td>{item.cashNonInvest}</td>
            </tr>
          ))}
        </tbody>
      </Section4>
    );
  }
  invertRender() {
    return (
      <Section4
        title="Đã bao gồm tái đầu tư coupon:"
        status={this.state.toggle.table1}
        refs="table2"
        onClick={this.showPopup}
        loading={this.props.buyLoading}
        item={this.props.flow.invest}
      >
        <thead>
          <tr>
            <th width="25%">Số tiền coupon tái đầu tư (VND)</th>
            <th width="25%">Ngày đầu tư</th>
            <th width="25%">Ngày kết thúc đầu tư</th>
            <th width="25%">Lãi tái đầu tư nhận được (VND)</th>
          </tr>
        </thead>
        <tbody>
          {_.map(this.props.flow.flowInvest, item => (
            <tr key={item.cashInvest}>
              <td>{item.reinvestmentRate}</td>
              <td>{item.payCouponDate}</td>
              <td>{item.lastPayCouponDate}</td>
              <td>{item.cashInvest}</td>
            </tr>
          ))}
        </tbody>
      </Section4>
    );
  }
  test() {
    this.handleParam('params', {
      date: new Date(),
      amount: 10,
      sum: 10
    });
  }
  render() {
    return (
      <Layout type={1} path="/" title="Chi Tiết Sản phẩm">
        {this.state.toggle.popup && (
          <Popup title="Thông tin trái phiếu" showPopup={() => this.showPopup('popup')}>
            <p>
              <strong>Coupon:</strong> {this.props.bond.couponPayment}
            </p>
            <p>
              <strong>Tái đầu tư coupon:</strong> {this.props.info.sumCashInvest}
            </p>
            <p>
              <strong>Lãi suất đầu tư:</strong> {this.props.info.reinvestmentRate}
            </p>
          </Popup>
        )}
        <div className="bond-detail">
          <Section1 item={this.props.bond} loading={this.props.bondLoading} />
          <form>
            <Section2
              item={this.props.info}
              loading={this.props.buyLoading}
              params={this.state.params}
              handleParam={this.handleParam}
            />
            <Section3
              showPopup={this.showPopup}
              item={this.props.info}
              loading={this.props.buyLoading}
            />
          </form>
          <div className="row mb-1">
            <label className="col-12 col-form-label text-primary">
              <strong>TỔNG TIỀN NHẬN ĐƯỢC (DỰ KIẾN)</strong>
            </label>
          </div>
          {this.nonInvertRender()}
          {this.invertRender()}
          <div className="row justify-content-center">
            <div className="col-9">
              <button
                type="button"
                onClick={() => history.push({ pathname: '/buy/order/' })}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
              >
                Đặt lệnh mua
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
  bondsDetail: PropTypes.func,
  info: PropTypes.object,
  flow: PropTypes.array,
  buyFetch: PropTypes.func,
  match: PropTypes.object,
  profile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Buy.info,
    flow: state.Buy.flow,
    bondLoading: state.Bonds.loading,
    buyLoading: state.Buy.loading,
    profile: state.Account.profile
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  buyFetch: buyActions.getBuy,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
