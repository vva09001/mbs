import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import { buyActions } from 'store/actions';
import { withTranslation } from 'react-i18next';
import Loading from 'components/common/loading';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        error: false,
        success: false
      }
    };
  }
  componentDidMount() {
    this.props.resetLoading();
  }
  showPopup = type => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [type]: !this.state.toggle[type]
      }
    });
  };
  _onApprove = () => {
    this.props.getContract();
  };
  render() {
    const { info, bond, t } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Layout type={1} title={t('buy_bonds')}>
        <div className="bond-buy-comfirm">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle no-padding uppc">{t('motion_bond_transfer')}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle no-padding uppc">{bond.issuerBond}</h4>
            </div>
          </div>

          <h4 className="text-center mtitle mspot">
            {t('bond_code')}: {info.bondCode}
          </h4>
          <p className="bgdd">
            <b>{t('assignor')}</b>
          </p>
          <div className="row">
            <div className="col-5 hl18">{t('organization_name')}</div>
            <div className="col-7 hl18">{t('Company_homepage')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('business_registration')}</div>
            <div className="col-7 hl18">{t('business_registration_info')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('address')}</div>
            <div className="col-7 hl18 text-justify">{t('address_company')}</div>
          </div>

          <div className="row">
            <div className="col-5 hl18">{t('representative')}</div>
            <div className="col-7 hl18">{t('mr')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('position')}</div>
            <div className="col-7 hl18">{t('general_manage')}</div>
          </div>
          <p className="bgdd">
            <b>{t('the_transferee')}</b>
          </p>
          <div className="mtable">
            <div className="row">
              <div className="col-5 hl18">{t('customer_name')}</div>
              <div className="col-7 hl18">{info.customerName}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('customer_id')}</div>
              <div className="col-7 hl18">{info.customerId}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('customer_id_date')}</div>
              <div className="col-7 hl18">{info.customerIddate}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('customer_id_place')}</div>
              <div className="col-7 hl18">{info.customerIdplace}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('cust_account_bank_code')}</div>
              <div className="col-7 hl18">{info.accountBankCode}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('cust_bank_name')}</div>
              <div className="col-7 hl18">{info.bankName}</div>
            </div>
          </div>
          <p className="bgdd">
            <b>{t('transferable_content')}</b>
          </p>
          <div className="row">
            <div className="col-5 hl18">{t('mass')}</div>
            <div className="col-7 hl18">
              {currency(info.buyVol)} {t('bonds')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Denominations')}</div>
            <div className="col-7 hl18">
              {currency(bond.parValue)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('transfer_price')}</div>
            <div className="col-7 hl18">
              {currency(info.buyPrice)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('total_transfer_value')}</div>
            <div className="col-7 hl18">
              {currency(info.buyValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('transfer_fee')}</div>
            <div className="col-7 hl18">0 VNĐ</div>
          </div>
          <div className="confirm-content">
            <p>
              {t('organization_(Mr./Ms)')}: <span className="text-blod">{info.customerName}</span>{' '}
              {t('confirm_content_1')}
            </p>
            <p>
              {t('confirm_content_2')}
              {bond.issuerBond} {t('confirm_content_3')}
            </p>
            <p>
              {t('confirm_content_4')} {bond.issuerBond} {t('confirm_content_5')}
            </p>
          </div>
        </div>
        <div id="btn-fixed" className="button-fixed">
          <div className="wapper-button button-comfirm link-sell">
            <button
              onClick={() => this._onApprove()}
              className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block"
            >
              {t('confirm')}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

Confirm.propTypes = {
  info: PropTypes.object,
  bond: PropTypes.object,
  getContract: PropTypes.func,
  approve: PropTypes.func,
  payment_link: PropTypes.string,
  loading: PropTypes.bool,
  resetLoading: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Buy.info,
    loading: state.Buy.loading,
    payment_link: state.Buy.payment_link
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContract: () => {
      dispatch(buyActions.getContract());
    },
    resetLoading: () => {
      dispatch({ type: buyActions.BUY_LOADING, loading: false });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Confirm));
