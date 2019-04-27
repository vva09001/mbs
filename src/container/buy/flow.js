import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';

const Flow = props => {
  const { t } = props;
  return (
    <Layout type={1} title={t('Đằng Ký Mua Trái Phiếu')}>
      <div className="buy-wrapper">
        <h4 className="text-center mtitle text-uppercase">
          {t('Dòng tiền nhận được khi mua Trái phiếu')}
        </h4>
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
                <strong> {props.info.maturityDate}</strong>
              </span>
            </p>
            <p>{t('Quý khách sẽ nhận được dòng tiền dự kiến như sau')}:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 bgb text-white d-flex justify-content-between align-items-center">
              <span>{t('Dòng tiền - chưa bao gồm tái đầu tư coupon')}:</span>
            </div>
            <div className="text-primary wpp">
              <strong>
                {t('Lợi suất đáo hạn')}:{' '}
                <span className="text-danger">
                  {currency(props.info.termNoninvest)}
                  %/
                  {t('năm')}
                </span>
              </strong>
            </div>
            <table className="table table-striped table-responsive">
              <thead>
                <tr className="text-primary">
                  <td>{t('Nội dung')}</td>
                  <td>{t('Ngày thanh toán')}</td>
                  <td>{t('Số tiền thực nhận dự kiến (VNĐ)')}</td>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowNonInvest, (item, index) => (
                  <tr key={index}>
                    <td>{t(item.content)}</td>
                    <td className="tac">{item.payCouponDate}</td>
                    <td className="tar">{currency(item.cashNonInvest)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái Phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info tar">{currency(props.info.sumCashNoninvest)}</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 bgb text-white d-flex justify-content-between align-items-center">
              <span>{t('Dòng tiền - đã bao gồm tái đầu tư coupon')}:</span>
            </div>
            <div className="text-primary wpp">
              <strong>
                {t('Lợi suất đã tái đầu tư')}:{' '}
                <span className="text-danger">
                  {currency(props.info.termInvest)}
                  %/
                  {t('năm')}
                </span>
              </strong>
            </div>
            <table className="table table-striped table-responsive">
              <thead>
                <tr className="text-primary">
                  <td>{t('Tiền coupon tái đầu tư (VNĐ)')}</td>
                  <td>{t('Từ ngày')}</td>
                  <td>{t('Đến ngày')}</td>
                  <td>{t('LS tái đầu tư')}</td>
                  <td>{t('Lãi tái đầu tư (VNĐ)')}</td>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowInvest, (item, index) => (
                  <tr key={index}>
                    <td>{currency(item.cashNonInvest)}</td>
                    <td>{item.payCouponDate}</td>
                    <td>{item.lastPayCouponDate}</td>
                    <td>{currency(item.reinvestmentRate)}</td>
                    <td className="tar">{currency(item.cashInvest)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái Phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info tar">{currency(props.info.sumCashInvest)}</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
            <i>
              {t('Lãi xuất')}: <span className="text-danger">{t('7%/năm')}</span>
            </i>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Flow.propTypes = {
  flow: PropTypes.array,
  flowCash: PropTypes.object,
  info: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    flow: state.Buy.flow,
    info: state.Buy.info,
    flowCash: state.Buy.flowCash
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Flow));
