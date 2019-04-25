import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import sellActions from 'store/sell/actions';

class Confirm extends Component {
  componentDidMount() {}
  _onUpdate() {
    this.props.update();
  }
  render() {
    const { bond, info, t } = this.props;
    return (
      <Layout type={1} title={t('Xác nhận giao dịch bán')}>
        <div className="bond-buy-comfirm">
          <h4 className="text-center mtitle uppc">
            {t('ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU')} {bond.issuerBond}
          </h4>
          <h4 className="text-center mtitle mspot">
            {t('MÃ')}: {info.bondCode}
          </h4>
          <p>
            <b>I. {t('Bên chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4 npdr">{t('Tên cá nhân')}</div>
            <div className="col-8">{info.customerName}</div>
          </div>
          <div className="row">
            <div className="col-4 npdr">{t('Số CMND/...')}</div>
            <div className="col-8">{info.customerId}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Nơi cấp')}</div>
            <div className="col-8">{info.customerIdplace}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Ngày cấp')}</div>
            <div className="col-8">{info.customerIddate}</div>
          </div>
          <p>
            <b>II. {t('Bên nhận chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên tổ chức')}</div>
            <div className="col-8">{t('CTCP chứng khoán MB')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số ĐKKD')}</div>
            <div className="col-8">{t('116/GP-UBCK do UBCKNN cấp 09/12/2013')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Địa chỉ')}</div>
            <div className="col-8">
              {t('Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Đại diện')}</div>
            <div className="col-8">
              {t('Ông')} {t('Trần Hải Hà')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Chức vụ')}</div>
            <div className="col-8">{t('Tổng Giám đốc')}</div>
          </div>
          <p>
            <b>III. {t('Nội dung chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Số lượng')}</div>
            <div className="col-8">
              {currency(info.sellVol)} {t('Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Mệnh giá')}</div>
            <div className="col-8">
              {currency(bond.parValue)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Giá')}</div>
            <div className="col-8">
              {currency(info.sellPrice)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Tổng giá trị')}</div>
            <div className="col-8">
              {currency(info.sellValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Phí')}</div>
            <div className="col-8">0{t('VNĐ')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Thuế TNCN')}</div>
            <div className="col-8">
              {currency(info.taxValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="fw13">
            <i>
              ({t('Thuế TNCN tạm khấu trừ')} = {t('Tổng giá trị')} x {currency(info.taxPit)}
              %)
            </i>
          </div>
          <div className="confirm-content">
            <p>{t('confirmSell1')}</p>
            <p>
              {bond.issuerBond} {t('confirmSell2')}
            </p>
            <p>
              {t('Hai bên thừa nhận, trong mọi trường hợp,')} {bond.issuerBond} {t('confirmSell3')}
            </p>
          </div>
        </div>
        <div className="button-fixed">
          <div className="wapper-button button-comfirm">
            <button
              onClick={() => this._onUpdate()}
              type="button"
              className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
            >
              {t('XÁC NHẬN')}
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
  update: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Sell.info
  };
};

const mapDispatchToProps = {
  update: sellActions.update
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Confirm));
