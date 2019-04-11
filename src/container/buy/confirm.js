import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import buyActions from '../../store/buy/actions';
import Popup from '../../components/common/popup';
import Loading from '../../components/common/loading';

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
    const { contract } = this.props;
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
          <h2 className="text-center color-1 mb-2">
            <strong>ĐỀ NGHỊ CHUYỂN NHƯỢNG Trái phiếu CÔNG TY ...</strong>
          </h2>
          <h3 className="text-center color-1 mb-4">
            <strong>Mã Trái phiếu: {contract.bondCode}</strong>
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
            <div className="col-4">Số CMND/HC/ĐKKD</div>
            <div className="col-8">
              <b>: 116/GP-UBCK do UBCKNN cấp ngày 09/12/2013</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Địa chỉ liên hệ</div>
            <div className="col-8">: Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội</div>
          </div>
          <div className="row">
            <div className="col-4">Điện thoại</div>
            <div className="col-4">: 024.37262600</div>
            <div className="col-4">Fax: 024.37262602</div>
          </div>
          <div className="row">
            <div className="col-4">Số Tài khoản</div>
            <div className="col-4">: 009 11 0000 3002</div>
            <div className="col-4">Mở tại: MB - CN Ba Đình</div>
          </div>
          <div className="row">
            <div className="col-4">Tên người đại diện (tổ chức)</div>
            <div className="col-4">
              : Ông <b>Trần Hải Hà</b>
            </div>
            <div className="col-4">
              Chức vụ: <b>Tổng Giám Đốc</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số CMND</div>
            <div className="col-2">: 012168414</div>
            <div className="col-3">Do: CA Hà Nội</div>
            <div className="col-3">Cấp ngày: 03/08/2010</div>
          </div>
          <div className="row">
            <div className="col-4">Tên người đại diện theo ủy quyền</div>
            <div className="col-4">
              <b>: Mrs Việt Oanh(test)</b>
            </div>
            <div className="col-4">Chức vụ: P. TỔNG GIÁM ĐỐC</div>
          </div>
          <div className="row">
            <div className="col-4">Theo giấy ủy quyền số</div>
            <div className="col-4">: 999/ UQ bond - test</div>
            <div className="col-4">Ngày: 30/03/2018</div>
          </div>
          <div className="row">
            <div className="col-4">Số Trái phiếu sổ hữu</div>
            <div className="col-8">:</div>
          </div>
          <div className="row">
            <div className="col-4">Mã Trái chủ</div>
            <div className="col-8">:</div>
          </div>
          <p>
            <b>I. Bên chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Tên tổ chức(cá nhân)</div>
            <div className="col-8">
              <b>: {contract.customerName}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số CMND/HC/ĐKKD</div>
            <div className="col-8">
              : {contract.customerId} Cấp ngày: {contract.customerIdDate}
            </div>
          </div>
          <div className="row">
            <div className="col-4">Nơi cấp</div>
            <div className="col-8">: {contract.customerIdPlace}</div>
          </div>
          <div className="row">
            <div className="col-4">Địa chỉ liên hệ</div>
            <div className="col-8">: Thanh Lưu, Thanh Liêm, Hà Nam</div>
          </div>
          <div className="row">
            <div className="col-4">Điện thoại</div>
            <div className="col-8">: 0917500333</div>
          </div>
          <div className="row">
            <div className="col-4">Số Tài khoản</div>
            <div className="col-4">: 009 22 6565 6454</div>
            <div className="col-4">Mở tại: MB - CN Hà Nam</div>
          </div>
          <div className="row">
            <div className="col-4">Tên người đại diện (tổ chức)</div>
            <div className="col-4">
              <b>: Lê Văn Lâm</b>
            </div>
            <div className="col-4">Chức vụ:</div>
          </div>
          <div className="row">
            <div className="col-4">Số CMND/CCCD/HC</div>
            <div className="col-4">: 012168414</div>
            <div className="col-4">Cấp ngày:</div>
          </div>
          <div className="row">
            <div className="col-4">Tên người đại diện theo ủy quyền</div>
            <div className="col-4">
              <b>: Mr Lâm Vĩnh</b>
            </div>
            <div className="col-4">Chức vụ:</div>
          </div>
          <div className="row">
            <div className="col-4">Giấy ủy quyền số</div>
            <div className="col-4">: 888/ UQ</div>
            <div className="col-4">Ngày:</div>
          </div>
          <div className="row">
            <div className="col-4">Số Trái phiếu sổ hữu</div>
            <div className="col-8">:</div>
          </div>
          <div className="row">
            <div className="col-4">Mã Trái chủ</div>
            <div className="col-8">:</div>
          </div>
          <p>
            <b>III. Nội dung chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Số Trái phiếu chuyển nhượng</div>
            <div className="col-8">: {contract.buyVol} Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Mệnh giá mỗi Trái phiếu</div>
            <div className="col-8">: {contract.buyPrice} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Giá chuyển nhượng</div>
            <div className="col-8">: {contract.buyPrice + contract.buyFee} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Tổng giá trị chuyển nhượng</div>
            <div className="col-8">: {contract.buyValue} VNĐ</div>
          </div>
          <div className="row">
            <div className="col-4">Phí chuyển nhượng</div>
            <div className="col-8">: {contract.buyFee}</div>
          </div>
          <div className="row">
            <div className="col-4">Thuế TNCN tạm khấu trừ</div>
            <div className="col-8">: {contract.taxPit}</div>
          </div>
          <p>
            <i>(Thuế TNCN tạm khấu trừ = Tổng giá trị chuyển nhượng x 0.10%)</i>
          </p>
          <div className="confirm-content">
            <p>
              Tổ chức (Ông/Bà): <b>Lê Văn Bộ</b>
            </p>
            <p>
              được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về số Trái phiếu chuyển nhượng
              nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của Công ty Cổ phần Chứng khoán
              MB...ủy quyền cho Công ty Cổ phần Chứng khoán MB xác nhận đăng ký chuyển nhượng theo
              yêu cầu của các Nhà Đầu Tư. Công ty Cổ phần Chứng khoán MB chỉ xác nhận tính hợp lệ về
              thử tục và việc đăng ký quyền sở hữu Trái phiếu, không xác nhận việc thanh toán giữa
              hai bên.
            </p>
            <p>
              Hai bên thừa nhận, trong mọi trường hợp, Q là đơn vị chịu trách nhiệm về tính đầy đủ,
              hợp pháp, của nguồn tiền thanh toán gốc và/hoặc lãi cho Người Sở Hữu Trái phiếu.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <a
                href={this.props.payment_link}
                className="btn btn-danger border-0 btn-lg btn-block mt-3"
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
  getContract: PropTypes.func,
  approve: PropTypes.func,
  payment_link: PropTypes.string,
  buyLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
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
