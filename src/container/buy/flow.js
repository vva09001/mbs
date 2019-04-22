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
    <Layout type={1} title="Xác thực giao dịch mua">
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
            <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
              <span>{t('Dòng tiền - chưa bao gồm tái đầu tư coupon')}:</span>
            </div>
            <p className="mt-2 mb-2 text-primary">
              <strong>
                {t('Lãi suất đầu tư')}:{' '}
                <span className="text-danger">
                  {currency(props.info.termNoninvest)}%/{t('năm')}
                </span>
              </strong>
            </p>
            <table className="table table-striped table-responsive">
              <thead>
                <tr className="text-primary">
                  <th>{t('STT')}</th>
                  <th>{t('Nội dung')}</th>
                  <th>{t('Ngày thanh toán')}</th>
                  <th>{t('Số tiền thực nhận dự kiến (VNĐ)')}</th>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowNonInvest, (item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{t(item.content)}</td>
                    <td>{item.payCouponDate}</td>
                    <td className="tar">{currency(item.cashNonInvest)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info">{currency(props.info.sumCashNoninvest)}</h5>
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
                {t('Lãi suất đầu tư')}:{' '}
                <span className="text-danger">
                  {currency(props.info.termInvest)}
                  %/{t('năm')}
                </span>
              </strong>
            </p>
            <table className="table table-striped table-responsive">
              <thead>
                <tr className="text-primary">
                  <th>{t('STT')}</th>
                  <th>{t('Số tiền coupon tái đầu từ (VNĐ)')}</th>
                  <th>{t('Ngày đầu tư')}</th>
                  <th>{t('Ngày kết thúc')}</th>
                  <th>{t('LS tái đầu tư')}</th>
                  <th>{t('Lãi tái đầu tư nhận được (VNĐ)')}</th>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowInvest, (item, index) => (
                  <tr>
                    <td>{index + 1}</td>
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
                  <td colSpan="5" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info">{currency(props.info.sumCashInvest)}</h5>
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
    info: state.Buy.info,
    flowCash: state.Buy.flowCash
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Flow));
