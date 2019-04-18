import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import buyActions from 'store/buy/actions';

const Flow = props => {
  const { t } = props;
  return (
    <Layout type={1} title="XÁC THỰC GIAO DỊCH MUA">
      <div className="buy-wrapper">
        <h4 className="text-center mtitle text-uppercase">{t('Dòng tiền nhận được khi mua Trái phiếu')}</h4>
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              {t('Từ ngày')}:
              <span className="text-info">
                <strong> {props.flowCash.couponDate}</strong>
              </span>
            </p>
            <p>
              {t('Đến ngày')}:
              <span className="text-info">
                <strong> {props.flowCash.payCouponDate}</strong>
              </span>
            </p>
            <p>{t('Quý khách sẽ nhận được dòng tiền dự kiến như sau')}:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
              <span>{t('Dòng tiền - chưa bao gồm tái đầu tư coupon')}:</span>
            </div>
            <p className="mt-2 mb-2 text-primary">
              <strong>
                {t('Lãi suất đầu tư')}: <span className="text-danger">{currency(props.flowCash.interestRef)}</span>
                %/{t('năm')}
              </strong>
            </p>
            <table className="table table-bordered white-bg text-center table-responsive">
              <thead>
                <tr className="text-primary">
                  <th>{t('STT')}</th>
                  <th>{t('Nội dung')}</th>
                  <th>{t('Ngày thanh toán')}</th>
                  <th>{t('Sô tiền thực nhận dự kiến (VND)')}</th>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowNonInvest, (item, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{t(item.content)}</td>
                    <td>{item.payCouponDate}</td>
                    <td>{currency(item.cashNonInvest)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info">{currency(props.flowCash.cashFolowSource)}</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
              <span>{t('Dòng tiền - đã bao gồm tái đầu tư coupon')}:</span>
            </div>
            <p className="mt-2 mb-2 text-primary">
              <strong>
                {t('Lãi suất đầu tư')}: <span className="text-danger">{currency(props.flowCash.interestCouponPercent)}</span>
                %/{t('năm')}
              </strong>
            </p>
            <table className="table table-bordered white-bg text-center table-responsive">
              <thead>
                <tr className="text-primary">
                  <th>{t('STT')}</th>
                  <th>{t('Số tiền coupon tái đầu từ (VND)')}</th>
                  <th>{t('Ngày đầu tư')}</th>
                  <th>{t('Ngày kết thúc')}</th>
                  <th>{t('Lãi suất tái đầu tư')}</th>
                  <th>{t('Lãi tái đầu tư nhận được (VND)')}</th>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowInvest, (item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.cashNonInvest}</td>
                    <td>{item.payCouponDate}</td>
                    <td>{item.lastPayCouponDate}</td>
                    <td>{item.reinvestmentRate}</td>
                    <td>{item.cashInvest}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info">{currency(props.flowCash.cashFolowCoupon)}</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Flow.propTypes = {
  flow: PropTypes.array
};

const mapStateToProps = state => {
  return {
    flow: state.Buy.flow,
    flowCash: state.Buy.flowCash
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Flow));
