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
      <Layout type={1} title="Xác nhận giao dịch bán">
        <div className="bond-buy-comfirm">
          <h4 className="text-center mtitle">
            {t('ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU')} {bond.issuerBond}
          </h4>
          <h3 className="text-center mtitle">
            {t('Mã Trái phiếu')}: {info.bondCode}
          </h3>
          <p>
            <b>I. {t('Bên chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên cá nhân')}</div>
            <div className="col-8">
              <b>: {info.customerName}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số CMND/CCCD')}</div>
            <div className="col-8">
              <b>: {info.customerId}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Nơi cấp')}</div>
            <div className="col-8">
              <b>: {info.customerIdplace}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Ngày cấp')}</div>
            <div className="col-8">
              <b>: {info.customerIddate}</b>
            </div>
          </div>
          <p>
            <b>
              II.
              {t('Bên nhận chuyển nhượng')}
            </b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên tổ chức')}</div>
            <div className="col-8">
              <b>: {t('CTCP chứng khoán MB')}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số ĐKKD')}</div>
            <div className="col-8">: {t('116/GP-UBCK do UBCKNN cấp ngày 09/12/2013')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Địa chỉ')}</div>
            <div className="col-8">
              : {t('Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Đại diện')}</div>
            <div className="col-8">
              : {t('Ông')} {t('Trần Hải Hà')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Chức vụ')}</div>
            <div className="col-8">
              : <b>{t('Tổng Giám đốc')}.</b>
            </div>
          </div>
          <p>
            <b>III. {t('Nội dung chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Số Trái phiếu chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(info.sellVol)} {t('Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Mệnh giá mỗi trái phiếu')}</div>
            <div className="col-8">
              : {currency(bond.parValue)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Giá chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(info.sellPrice)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Tổng giá trị chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(info.sellValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Phí chuyển nhượng')}</div>
            <div className="col-8">: 0</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Thuế TNCN tạm khấu trừ')}</div>
            <div className="col-8">
              : {currency(info.taxValue)} {t('VNĐ')}
            </div>
          </div>
          <p>
            <i>
              ({t('Thuế TNCN tạm khấu trừ')} = {t('Tổng giá trị')} x {currency(info.taxPit)}
              %)
            </i>
          </p>
          <div className="confirm-content">
            <p>
              {t(
                'CTCP chứng khoán MB được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số Trái Phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của CTCP Chứng khoán MB.'
              )}
            </p>
            <p>
              {bond.issuerBond}{' '}
              {t(
                'ủy quyền cho CTCP Chứng khoán MB xác nhận đăng ký chuyển nhượng theo yêu cầu của các Nhà Đầu Tư. CTCP Chứng khoán MB chỉ xác nhận tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu Trái Phiếu, không xác nhận việc thanh toán giữa hai bên.'
              )}
            </p>
            <p>
              {t('Hai bên thừa nhận, trong mọi trường hợp,')} {bond.issuerBond}{' '}
              {t(
                'là đơn vị chịu trách nhiệm về tính đầy đủ, hợp pháp của nguồn tiền thanh toán gốc và/hoặc lãi cho Người Sở Hữu Trái Phiếu.'
              )}
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
