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
          <h4 className="text-center mtitle uppc">
            {t('ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU')} {bond.issuerBond}
          </h4>
          <h4 className="text-center mtitle mspot">
            {t('MÃ')}: {contract.bondCode}
          </h4>
          <p>
            <b>I. {t('Bên chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Tên tổ chức')}</div>
            <div className="col-8">: {t('CTCP chứng khoán MB')}</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Số ĐKKD')}</div>
            <div className="col-8">: {t('116/GP-UBCK, UBCKNN cấp 09/12/2013')}</div>
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
              : {t('Tổng Giám đốc')}
            </div>
          </div>
          <p>
            <b>II. {t('Bên nhận chuyển nhượng')}</b>
          </p>
          <div className="mtable">
            <div className="row">
              <div className="col-4">{t('Tên cá nhân')}</div>
              <div className="col-8">
                : {contract.customerName}
              </div>
            </div>
            <div className="row">
              <div className="col-4">{t('Số CMND/...')}</div>
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
          </div>
          <p>
            <b>III. {t('Nội dung chuyển nhượng')}</b>
          </p>
          <div className="row">
            <div className="col-4">{t('Số lượng')}</div>
            <div className="col-8">
              : {currency(contract.buyVol)} {t('Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Mệnh giá')}</div>
            <div className="col-8">
              : {currency(bond.parValue)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Giá')}</div>
            <div className="col-8">
              : {currency(contract.buyPrice)} {t('VNĐ/Trái phiếu')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Tổng giá trị')}</div>
            <div className="col-8">
              : {currency(contract.buyValue)} {t('VNĐ')}
            </div>
          </div>
          <div className="row">
            <div className="col-4">{t('Phí')}</div>
            <div className="col-8">: 0 VNĐ</div>
          </div>
          <div className="row">
            <div className="col-4">{t('Thuế TNCN')}</div>
            <div className="col-8">:</div>
          </div>
          <div className="fw13">
            <i>
              ({t('Thuế TNCN tạm khấu trừ')} = {t('Tổng giá trị')} x {currency(contract.taxPit)}
              %)
            </i>
          </div>
          <div className="confirm-content">
            <p>
              {t('Ông/Bà')}: <b>{contract.customerName} </b>
              {t(
                'được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số trái phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của CTCP Chứng khoán MB.'
              )}
            </p>
            <p>
              {bond.issuerBond}{' '}
              {t(
                `ủy quyền cho CTCP Chứng khoán MB xác nhận đăng ký chuyển nhượng theo yêu cầu của các Nhà Đầu Tư. CTCP Chứng khoán MB chỉ xác nhận tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu trái phiếu, không xác nhận việc thanh toán giữa hai bên.`
              )}
            </p>
            <p>
              {t(`Hai bên thừa nhận, trong mọi trường hợp,`)} {bond.issuerBond}{' '}
              {t(
                `là đơn vị chịu trách nhiệm về tính đầy đủ, hợp pháp của nguồn tiền thanh toán gốc và/hoặc lãi cho Người Sở Hữu Trái Phiếu.`
              )}
            </p>
          </div>
        </div>
        <div className="button-fixed">
          <div className="wapper-button button-comfirm">
            <a
              href={this.props.payment_link}
              className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block"
            >
              {t('XÁC NHẬN')}
            </a>
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
