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
    <Layout type={1} title="on_bond_purchase_sign">
      <div className="buy-wrapper">
        <h4 className="text-center mtitle text-uppercase">
          {t('cash_flow_received_when_buying_bonds')}
        </h4>
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              {t('since')} :
              <span className="text-info">
                <strong> {props.info.buyDate}</strong>
              </span>
            </p>
            <p className="mb-0">
              {t('to_date')} :
              <span className="text-info">
                <strong> {props.info.maturityDate}</strong>
              </span>
            </p>
            <p>{t('you_will_receive_the_expected_cash_flow_as_follows')}:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p-2 bg999 text-white d-flex justify-content-between align-items-center">
              <span>{t('cash_flow_does_not_include_coupon_reinvestment')}</span>
            </div>
            <div className="text-primary wpp">
              <i className="font14">
                {t('the_yield_has_not_reinvested')} :{' '}
                <strong className="text-info">
                  {currency(props.info.termNoninvest)}
                  %/
                  {t('year')}
                </strong>
              </i>
            </div>
            <table className="table table-striped">
              <thead>
                <tr className="text-primary">
                  <td className="text-left">{t('content')}</td>
                  <td>{t('date_of_payment')}</td>
                  <td>{t('money_received_(VND)')}</td>
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
                    <strong>{t('total_cash_flow_from_Bonds')}</strong>
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
            <div className="p-2 bg999 text-white d-flex justify-content-between align-items-center">
              <span>{t('cash_flow_has_included_reinvestment_coupon')}</span>
            </div>
            <div className="text-primary wpp">
              <i className="font14">
                {t('the_yield_has_reinvested')} :{' '}
                <strong className="text-info">
                  {currency(props.info.termInvest)}
                  %/
                  {t('year')}
                </strong>
              </i>
            </div>
            <table className="table table-striped table-responsive">
              <thead>
                <tr className="text-primary">
                  <td>{t('since')}</td>
                  <td>{t('to_date')}</td>
                  <td>{t('coupon_reinvestment')}</td>
                  <td>{t('reinvestment_interest_(VND)')}</td>
                </tr>
              </thead>
              <tbody>
                {_.map(props.flow.flowInvest, (item, index) => (
                  <tr key={index}>
                    <td>{item.payCouponDate}</td>
                    <td>{item.lastPayCouponDate}</td>
                    <td>{currency(item.cashNonInvest)}</td>
                    <td className="tar">{currency(item.cashInvest)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-primary white-bg">
                    <i>
                      {t('reinvestment_interest_rate')} :{' '}
                      {props.flow.flowInvest.length > 0
                        ? props.flow.flowInvest[0].reinvestmentRate
                        : 0}
                      {t('%/year')}
                    </i>
                  </td>
                </tr>
              </tfoot>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>{t('total_cash_flow_from_Bonds')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info tar">{currency(props.info.sumCashInvest)}</h5>
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
