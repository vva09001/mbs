import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import { sellActions } from 'store/actions';
class Confirm extends Component {
  componentDidMount() {}
  _onUpdate() {
    this.props.update();
  }
  render() {
    const { bond, info, t } = this.props;
    return (
      <Layout type={1} title="sell_bonds">
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
          <div className="row">
            <div className="col-3 npdr">{t('dear')}: </div>
            <div className="col-9">{`- ${bond.issuerBond}`}</div>
            <div className="col-3 npdr" />
            <div className="col-9"> - {t('company')}</div>
          </div>
          <div className="row text-justy">
            <div className="col-12">
              {t('confirm_sell_01')}
              {' ' + bond.issuerBond} – {t('Bond_Code')} {bond.bondCode + ' '}
              {t('confirm_sell_02')}
            </div>
          </div>
          <div className="sum-field titles row">
            <div className="msti">
              <b>{t('assignor')}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-5 npdr hl18">{t('customer_name')}</div>
            <div className="col-7 hl18">{info.customerName}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18 npdr">{t('customer_id')}</div>
            <div className="col-7  hl18">{info.customerId}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('customer_id_date')}</div>
            <div className="col-7  hl18">{info.customerIddate}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('customer_id_place')}</div>
            <div className="col-7  hl18">{info.customerIdplace}</div>
          </div>
          <p className="titles">
            <b>{t('the_transferee')}</b>
          </p>
          <div className="row">
            <div className="col-5  hl18">{t('organization_name')}</div>
            <div className="col-7  hl18">{t('company')}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('business_registration')}</div>
            <div className="col-7  hl18">{t('business_registration_info')}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('address')}</div>
            <div className="col-7  hl18">{t('address_company')}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('representative')}</div>
            <div className="col-7  hl18">{t('mr')}</div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('position')}</div>
            <div className="col-7  hl18">{t('general_manage')}</div>
          </div>
          <p className="titles">
            <b>{t('transfer_information')}</b>
          </p>
          <div className="row">
            <div className="col-5  hl18">{t('mass')}</div>
            <div className="col-7  hl18">
              {currency(info.sellVol)} {t('bonds')}
            </div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('Denominations')}</div>
            <div className="col-7  hl18">
              {currency(bond.parValue)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('transfer_price')}</div>
            <div className="col-7  hl18">
              {currency(info.sellPrice)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5  hl18">{t('total_transfer_value')}</div>
            <div className="col-7  hl18">
              {currency(info.sellValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('transfer_fee')}</div>
            <div className="col-7 hl18">0 {t('VNĐ')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('pit_rate')}</div>
            <div className="col-7 hl18">
              {currency(Math.round(info.taxValue))} {t('VNĐ')}
            </div>
          </div>
          <div className="fw13">
            <i>
              ({t('pit_temporarily_withheld')} = {t('total_value')} x {currency(info.taxPit)}
              %)
            </i>
          </div>
          <div className="confirm-content">
            <p>
              {t('organization_(Mr./Ms)')} : {''}
              <span className="text-blod">{t('company')}</span> {t('confirm_content_1')}
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
          <div className="wapper-button button-comfirm">
            <button
              onClick={() => this._onUpdate()}
              type="button"
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
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
  bond: PropTypes.object,
  info: PropTypes.object,
  book: PropTypes.object,
  update: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Sell.info,
    book: state.Sell.book
  };
};

const mapDispatchToProps = {
  update: sellActions.update
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Confirm));
