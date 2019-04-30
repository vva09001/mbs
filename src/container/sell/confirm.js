import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import sellActions from 'store/sell/actions';
import moment from 'moment';
class Confirm extends Component {
  componentDidMount() {}
  _onUpdate() {
    this.props.update();
  }
  render() {
    const { bond, info, t } = this.props;
    const date = new Date();
    const day = moment(date).format('DD');
    const month = moment(date).format('MM');
    const year = moment(date).format('YYYY');
    return (
      <Layout type={1} title={t('BÁN TRÁI PHIẾU')}>
        <div className="bond-buy-comfirm">
          <div className="row">
            <div className="col-12 text-right">
              {t('Ngày')} {day} {t('tháng')} {month} {t('năm')} {year}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle uppc">{t('ĐỀ NGHỊ CHUYỂN NHƯỢNG')}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle uppc">
                {t(' TRÁI PHIẾU CÔNG TY CỔ PHẦN TẬP ĐOÀN FLC ')}
              </h4>
            </div>
          </div>

          <h4 className="text-center mtitle mspot">
            {t('Mã Số Trái Phiếu')}: {info.bondCode}
          </h4>
          <div className="row">
            <div className="col-3 npdr">{t('Kính gửi')}: </div>
            <div className="col-9">{t('- Công ty Cổ phần Tập đoàn FLC')}</div>
            <div className="col-3 npdr" />
            <div className="col-9">{t('- Công ty Cổ phần Chứng khoán MB')}</div>
          </div>
          <div className="row">
            <div className="col-12">
              {t(
                'Sau khi thỏa thuận, Bên chuyển nhượng và Bên nhận chuyển nhượng thống nhất thực hiện việc chuyển nhượng Trái Phiếu Công ty Cổ phần Tập đoàn FLC – Mã số Trái Phiếu'
              )}{' '}
              {''}
              {bond.bondCode}
              {
                'từ Bên chuyển nhượng sang Bên nhận chuyển nhượng theo thông tin được nêu dưới đây: '
              }
            </div>
          </div>

          <p>
            <b>{t('Bên chuyển nhượng')}</b>
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
            <b>{t('Bên nhận chuyển nhượng')}</b>
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
            <b>{t('Thông Tin Chuyển Nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Khối Lượng')}</div>
            <div className="col-8">
              {currency(info.sellVol)} {t('Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Mệnh giá')}</div>
            <div className="col-8">
              {currency(bond.parValue)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Giá chuyển nhượng')}</div>
            <div className="col-8">
              {currency(info.sellPrice)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Tổng giá trị')}</div>
            <div className="col-8">
              {currency(info.sellValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Phí chuyển nhượng')}</div>
            <div className="col-8">0{t('VNĐ')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Thuế TNCN (Do MBS chi trả)')}</div>
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
            <p>
              {t('confirmSell1')} {bond.issuerBond}{' '}
            </p>
            <p>{t('confirmSell2')}</p>
            <p>{t('confirmSell3')}</p>
            <p>{t('confirmSell4')}</p>
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
