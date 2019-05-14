import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import { useTranslation } from 'react-i18next';

const Info = ({ detail }) => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="bond_information">
      <div className="bond-detail pdt10">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td width="50%">
                <b>{t(`issuers`)}</b>
              </td>
              <td width="50%">{detail.issuerBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`bond_code`)}</b>
              </td>
              <td>{detail.bondCode}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`denominations`)}</b>
              </td>
              <td>
                {currency(detail.parValue)} {t(`VNĐ`)}/{t(`bonds`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`release_price`)}</b>
              </td>
              <td>
                {currency(detail.issuePrice)}% {t(`denominations`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`period`)}</b>
              </td>
              <td>{detail.termBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`release_date`)}</b>
              </td>
              <td>{detail.releaseDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`date_due`)}</b>
              </td>
              <td>{detail.maturityDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`interest_on_bonds`)}</b>
              </td>
              <td className="text-justify">
                {t(`termFixCount`)} {''}
                {detail.termFixCount} {''}
                {t(`interestFixRate`)} {currency(detail.interestFixRate)}
                {t(`%/year`)}.
                {detail.interestFloatRange !== 0
                  ? t(`interestFloatRange`) + detail.interestFloatRange + t(`%/year`)
                  : ''}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`interest_period`)}</b>
              </td>
              <td>
                {detail.couponPayment} {t(`month/time`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`form_of_bond`)}</b>
              </td>
              <td>{detail.releaseForm}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`bond_related_rights`)}</b>
              </td>
              <td>{detail.rightBuyDesc}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`agents_register_depository`)}</b>
              </td>
              <td>{detail.depositAgents}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`payment_agent`)}</b>
              </td>
              <td>{detail.paymentAgents}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

Info.propTypes = {
  detail: PropTypes.object
};

const mapStateToProps = state => {
  return {
    detail: state.Bonds.detail
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
