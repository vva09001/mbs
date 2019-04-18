import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import buyActions from 'store/buy/actions';
import Popup from 'components/common/popup';
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
    const { contract, bond } = this.props;
    if (this.props.buyLoading) {
      return <Loading />;
    }
    return (
      <Layout type={1} title="XÁC THỰC GIAO DỊCH MUA">
        {this.state.toggle.success && (
          <Popup title="Thông tin Trái phiếu" showPopup={() => this.showPopup('success')}>
            <span>
              <i>Quý khách đã đăng ký mua Trái phiếu thành công</i>
            </span>
          </Popup>
        )}
        {this.state.toggle.error && (
          <Popup title="Thông tin Trái phiếu" showPopup={() => this.showPopup('error')}>
            <span className="text-danger">
              <i>Quý khách đăng ký mua Trái phiếu không thành công</i>
            </span>
          </Popup>
        )}
        <div className="bond-buy-comfirm">
          <h3 className="text-center mtitle">
            ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU CÔNG TY {bond.issuerBond}
          </h3>
          <h3 className="text-center mtitle">
            Mã Trái phiếu: {contract.bondCode}
          </h3>
          <p>
            <b>I. Bên chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Tên tổ chức</div>
            <div className="col-8">
              <b>: Công ty cổ phần chứng khoán MB</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số ĐKKD</div>
            <div className="col-8">
              <b>: 116/GP-UBCK do UBCKNN cấp ngày 09/12/2013</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Địa chỉ</div>
            <div className="col-8">: Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội</div>
          </div>

          <div className="row">
            <div className="col-4">Người đại diện</div>
            <div className="col-4">
              : Ông <b>Trần Hải Hà</b>
            </div>
            <div className="col-4">
              Chức vụ: <b>Tổng Giám đốc.</b>
            </div>
          </div>

          <p>
            <b>II.Bên nhận chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Tên cá nhân</div>
            <div className="col-8">
              <b>: {contract.customerName}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số CMND/HC/ĐKKD</div>
            <div className="col-8">: {contract.customerId}</div>
          </div>
          <div className="row">
            <div className="col-4">Ngày cấp</div>
            <div className="col-8">: {contract.customerIddate}</div>
          </div>
          <div className="row">
            <div className="col-4">Nơi cấp</div>
            <div className="col-8">: {contract.customerIdplace}</div>
          </div>
          <p>
            <b>III. Nội dung chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Số Trái phiếu chuyển nhượng</div>
            <div className="col-8">: {currency(contract.buyVol)} Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Mệnh giá mỗi Trái phiếu</div>
            <div className="col-8">: {currency(bond.parValue)} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Giá chuyển nhượng</div>
            <div className="col-8">: {currency(contract.buyPrice)} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Tổng giá trị chuyển nhượng</div>
            <div className="col-8">: {currency(contract.buyValue)} VNĐ</div>
          </div>
          <div className="row">
            <div className="col-4">Phí chuyển nhượng</div>
            <div className="col-8">: 0</div>
          </div>
          <div className="row">
            <div className="col-4">Thuế TNCN tạm khấu trừ</div>
            <div className="col-8">: </div>
          </div>
          <p>
            <i>
              (Thuế TNCN tạm khấu trừ = Tổng giá trị chuyển nhượng x {currency(contract.taxPit)}
              %)
            </i>
          </p>
          <div className="confirm-content">
            <p>
              Tổ chức (Ông/Bà): <b>{contract.customerName}</b>
              được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số trái phiếu chuyển nhượng
              nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của Công ty Cổ phần Chứng khoán
              MB.
            </p>
            <p>
              {bond.issuerBond} ủy quyền cho Công ty Cổ phần Chứng khoán MB xác nhận đăng ký chuyển
              nhượng theo yêu cầu của các Nhà Đầu Tư. Công ty Cổ phần Chứng khoán MB chỉ xác nhận
              tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu trái phiếu, không xác nhận việc
              thanh toán giữa hai bên.
            </p>
            <p>
              Hai bên thừa nhận, trong mọi trường hợp, {bond.issuerBond} là đơn vị chịu trách nhiệm
              về tính đầy đủ, hợp pháp của nguồn tiền thanh toán gốc và/hoặc lãi cho Người Sở Hữu
              Trái Phiếu.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <a
                href={this.props.payment_link}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mt-3"
              >
                XÁC NHẬN
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
  buyLoading: PropTypes.bool
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
)(Confirm);
