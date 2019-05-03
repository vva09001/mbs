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
              <h4 className="text-center mtitle uppc">{bond.issuerBond}</h4>
            </div>
          </div>

          <h4 className="text-center mtitle mspot">
            {t('Mã Số Trái Phiếu')}: {info.bondCode}
          </h4>
          <div className="row">
            <div className="col-3 npdr">{t('Kính gửi')}: </div>
            <div className="col-9">{`- ${bond.issuerBond}`}</div>
            <div className="col-3 npdr" />
            <div className="col-9">{t('- Công ty Cổ phần Chứng khoán MB')}</div>
          </div>
          <div className="row">
            <div className="col-12">
              {t(
                'Sau khi thỏa thuận, Bên chuyển nhượng và Bên nhận chuyển nhượng thống nhất thực hiện việc chuyển nhượng Trái Phiếu'
              )}
              {' ' + bond.issuerBond} – Mã số Trái phiếu {bond.bondCode + ' '}
              {
                'từ Bên chuyển nhượng sang Bên nhận chuyển nhượng theo thông tin được nêu dưới đây: '
              }
            </div>
          </div>
          <div className="sum-field titles row">
            <div className="msti">
              <b>{t('Bên chuyển nhượng')}</b>
            </div>
          </div>
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
            <div className="col-4">{t('Tổng giá trị chuyển nhượng')}</div>
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
              {t('Tổ chức (Ông/ Bà)')}: {info.customerName}{' '}
            </p>
            <p>
              {t(
                'được ghi tên trên Sổ Đăng Ký và được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số trái phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của Công ty Cổ phần Chứng khoán MB. Bên nhận chuyển nhượng không chịu ảnh hưởng cũng như không phải chịu trách nhiệm về bất kỳ thỏa thuận liên quan đến Trái Phiếu giữa Tổ Chức Phát Hành và/hoặc Đại Lý Đăng Ký Lưu Ký và/hoặc Bên chuyển nhượng và/hoặc bên thứ ba nào khác mà Bên nhận chuyển nhượng không được thông báo bằng văn bản, ngoại trừ Bản Công Bố Thông Tin, Hợp Đồng Đại lý Đăng Ký Lưu Ký và Hợp đồng mua bán giữa Bên chuyển nhượng và Bên nhận chuyển nhượng.'
              )}
            </p>
            <p>
              {bond.issuerBond}{' '}
              {t(
                'ủy quyền cho Công ty Cổ phần Chứng khoán MB xác nhận đăng ký chuyển nhượng theo yêu cầu của các Nhà Đầu Tư (Bên chuyển nhượng, Bên nhận chuyển nhượng). Công ty Cổ phần Chứng khoán MB chỉ xác nhận tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu trái phiếu, không xác nhận việc thanh toán giữa hai bên.'
              )}
            </p>
            <p>
              {t('Các Bên thừa nhận, trong mọi trường hợp,')} {bond.issuerBond}{' '}
              {t(
                'là đơn vị chịu trách nhiệm thanh toán gốc và/hoặc lãi Trái Phiếu cho Chủ Sở Hữu Trái Phiếu và cam đoan chịu trách nhiệm về tính đầy đủ, hợp pháp của nguồn tiền thanh toán gốc và/hoặc lãi cho Chủ Sở Hữu Trái Phiếu.'
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
