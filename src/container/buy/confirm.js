import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import buyActions from 'store/buy/actions';
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
    this.props.getContract();
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
    this.props.approve();
  };
  render() {
    const { contract, bond, t } = this.props;
    if (this.props.buyLoading) {
      return <Loading />;
    }
    return (
      <Layout type={1} title="Xác thực giao dịch mua">
        <div className="bond-buy-comfirm">
          <h3 className="text-center mtitle">
            {t('ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU CÔNG TY')} {bond.issuerBond}
          </h3>
          <h3 className="text-center mtitle">
            {t('Mã Trái phiếu')}: {contract.bondCode}
          </h3>
          <p>
            <b>I. {t('Bên chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên tổ chức')}</div>
            <div className="col-8">
              <b>: {t('Công ty cổ phần chứng khoán MB')}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số ĐKKD')}</div>
            <div className="col-8">
              <b>: {t('116/GP-UBCK do UBCKNN cấp ngày 09/12/2013')}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Địa chỉ')}</div>
            <div className="col-8">
              : {t('Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội')}
            </div>
          </div>

          <div className="row">
            <div className="col-4">{t('Người đại diện')}</div>
            <div className="col-8">
              : {t('Ông')} <b>{t('Trần Hải Hà')}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Chức vụ')}</div>
            <div className="col-4">
              : <b>{t('Tổng Giám đốc')}.</b>
            </div>
          </div>

          <p>
            <b>
              II.
              {t('Bên nhận chuyển nhượng')}
            </b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên cá nhân')}</div>
            <div className="col-8">
              <b>: {contract.customerName}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số CMND/HC/ĐKKD')}</div>
            <div className="col-8">: {contract.customerId}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Ngày cấp')}</div>
            <div className="col-8">: {contract.customerIddate}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Nơi cấp')}</div>
            <div className="col-8">: {contract.customerIdplace}</div>
          </div>
          <p>
            <b>III. {t('Nội dung chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Số Trái phiếu chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(contract.buyVol)} {t('Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Mệnh giá mỗi Trái phiếu')}</div>
            <div className="col-8">
              : {currency(bond.parValue)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Giá chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(contract.buyPrice)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Tổng giá trị chuyển nhượng')}</div>
            <div className="col-8">
              : {currency(contract.buyValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Phí chuyển nhượng')}</div>
            <div className="col-8">: 0</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Thuế TNCN tạm khấu trừ')}</div>
            <div className="col-8">: </div>
          </div>
          <p>
            <i>
              ({t('Thuế TNCN tạm khấu trừ')} = {t('Tổng giá trị chuyển nhượng')} x{' '}
              {currency(contract.taxPit)}
              %)
            </i>
          </p>
          <div className="confirm-content">
            <p>
              {t('Tổ chức (Ông/Bà)')}: <b>{contract.customerName} </b>
              {t(
                'được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số trái phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của Công ty Cổ phần Chứng khoán MB.'
              )}
            </p>
            <p>
              {bond.issuerBond}{' '}
              {t(
                `ủy quyền cho Công ty Cổ phần Chứng khoán MB xác nhận đăng ký chuyển nhượng theo yêu cầu của các Nhà Đầu Tư. Công ty Cổ phần Chứng khoán MB chỉ xác nhận tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu trái phiếu, không xác nhận việc thanh toán giữa hai bên.`
              )}
            </p>
            <p>
              {t(`Hai bên thừa nhận, trong mọi trường hợp,`)} {bond.issuerBond}{' '}
              {t(
                `là đơn vị chịu trách nhiệm về tính đầy đủ, hợp pháp của nguồn tiền thanh toán gốc và/hoặc lãi cho Người Sở Hữu Trái Phiếu.`
              )}
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <a
                href={this.props.payment_link}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
              >
                {t('XÁC NHẬN')}
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Confirm.propTypes = {
  contract: PropTypes.object,
  bond: PropTypes.object,
  getContract: PropTypes.func,
  approve: PropTypes.func,
  payment_link: PropTypes.string,
  buyLoading: PropTypes.bool,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    contract: state.Buy.contract,
    buyLoading: state.Buy.loading,
    payment_link: state.Buy.payment_link
  };
};

const mapDispatchToProps = {
  getContract: buyActions.getContract,
  approve: buyActions.approve
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Confirm));
