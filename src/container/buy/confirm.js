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
      <Layout type={1} title="MUA TRÁI PHIẾU">
        <div className="bond-buy-comfirm">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle no-padding uppc">
                {t('ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU')}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mtitle no-padding uppc">{bond.issuerBond}</h4>
            </div>
          </div>

          <h4 className="text-center mtitle mspot">
            {t('Mã Số Trái Phiếu')}: {info.bondCode}
          </h4>
          <p className="bgdd">
            <b>{t('Bên chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-5 hl18">{t('Tên tổ chức')}</div>
            <div className="col-7 hl18">{t('CTCP chứng khoán MB')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Số ĐKKD')}</div>
            <div className="col-7 hl18">{t('116/GP-UBCK, UBCKNN cấp 09/12/2013')}</div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Địa chỉ')}</div>
            <div className="col-7 hl18 text-justify">
              {t('Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội')}
            </div>
          </div>

          <div className="row">
            <div className="col-5 hl18">{t('Người đại diện')}</div>
            <div className="col-7 hl18">
              {t('Ông')} {t('Trần Hải Hà')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Chức vụ')}</div>
            <div className="col-7 hl18">{t('Tổng Giám đốc')}</div>
          </div>
          <p className="bgdd">
            <b>{t('Bên nhận chuyển nhượng')}</b>
          </p>
          <div className="mtable">
            <div className="row">
              <div className="col-5 hl18">{t('Tên cá nhân')}</div>
              <div className="col-7 hl18">{info.customerName}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('Số CMND/...')}</div>
              <div className="col-7 hl18">{info.customerId}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('Ngày cấp')}</div>
              <div className="col-7 hl18">{info.customerIddate}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('Nơi cấp')}</div>
              <div className="col-7 hl18">{info.customerIdplace}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('Số Tài Khoản')}</div>
              <div className="col-7 hl18">{info.custAccountBankCode}</div>
            </div>
            <div className="row">
              <div className="col-5 hl18">{t('Mở tại')}</div>
              <div className="col-7 hl18">{info.custBankName}</div>
            </div>
          </div>
          <p className="bgdd">
            <b>{t('Nội dung chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-5 hl18">{t('Khối Lượng')} :</div>
            <div className="col-7 hl18">
              {currency(info.buyVol)} {t('Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Mệnh giá')}</div>
            <div className="col-7 hl18">
              {currency(bond.parValue)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Giá chuyển nhượng')}</div>
            <div className="col-7 hl18">
              {currency(info.buyPrice)} {t('VNĐ/Trái Phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Tổng giá trị chuyển nhượng')}</div>
            <div className="col-7 hl18">
              {currency(info.buyValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-5 hl18">{t('Phí chuyển nhượng')}</div>
            <div className="col-7 hl18">0 VNĐ</div>
          </div>
          <div className="confirm-content">
            <p>
              {t('Tổ chức (Ông/ Bà)')}: <span className="text-blod">{info.customerName}</span>{' '}
              {t(
                'được ghi tên trên Sổ Đăng Ký và được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số trái phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của Công ty Cổ phần Chứng khoán MB.'
              )}
            </p>
            <p>
              {t(
                'Bên nhận chuyển nhượng không chịu ảnh hưởng cũng như không phải chịu trách nhiệm về bất kỳ thỏa thuận liên quan đến Trái Phiếu giữa Tổ Chức Phát Hành và/hoặc Đại Lý Đăng Ký Lưu Ký và/hoặc Bên chuyển nhượng và/hoặc bên thứ ba nào khác mà Bên nhận chuyển nhượng không được thông báo bằng văn bản, ngoại trừ Bản Công Bố Thông Tin, Hợp Đồng Đại lý Đăng Ký Lưu Ký và Hợp đồng mua bán giữa Bên chuyển nhượng và Bên nhận chuyển nhượng.'
              )}
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
          <div className="wapper-button button-comfirm link-sell">
            <button
              onClick={() => this._onApprove()}
              className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block"
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
