import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import sellActions from 'store/sell/actions';

class Confirm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  _onUpdate() {
    this.props.update();
  }
  render() {
    const { bond, info } = this.props;
    return (
      <Layout type={1} title="Xác nhận giao dịch bán">
        <div className="bond-buy-comfirm">
          <h3 className="text-center mtitle">
            ĐỀ NGHỊ CHUYỂN NHƯỢNG TRÁI PHIẾU CÔNG TY {bond.issuerBond}
          </h3>
          <h3 className="text-center mtitle">Mã Trái phiếu: {info.bondCode}</h3>
          <p>
            <b>I. Bên chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Tên cá nhân</div>
            <div className="col-8">
              <b>: {info.customerName}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số CMND/CCCD</div>
            <div className="col-8">
              <b>: {info.customerId}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Nơi cấp</div>
            <div className="col-8">
              <b>: {info.customerIdplace}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Ngày cấp</div>
            <div className="col-8">
              <b>: {info.customerIddate}</b>
            </div>
          </div>
          <p>
            <b>II.Bên nhận chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Tên tổ chức</div>
            <div className="col-8">
              <b>: CTCP chứng khoán MB</b>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Số ĐKKD</div>
            <div className="col-8">: 116/GP-UBCK do UBCKNN cấp ngày 09/12/2013</div>
          </div>
          <div className="row">
            <div className="col-4">Địa chỉ</div>
            <div className="col-8">: Tầng M-3-7 Tòa nhà MB, Số 3 Liễu Giai - Ba Đình - Hà Nội</div>
          </div>
          <div className="row">
            <div className="col-4">Người đại diện</div>
            <div className="col-4">
              <b>: Ông Trần Hải Hà</b>
            </div>
            <div className="col-4">Chức vụ: Tổng giám đốc</div>
          </div>
          <p>
            <b>III. Nội dung chuyển nhượng</b>
          </p>
          <div className="row">
            <div className="col-4">Số Trái phiếu chuyển nhượng</div>
            <div className="col-8">: {currency(info.sellVol)} Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Mệnh giá mỗi trái phiếu</div>
            <div className="col-8">: {currency(bond.parValue)} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Giá chuyển nhượng</div>
            <div className="col-8">: {currency(info.sellPrice)} VNĐ/Trái phiếu</div>
          </div>
          <div className="row">
            <div className="col-4">Tổng giá trị chuyển nhượng</div>
            <div className="col-8">: {currency(info.sellValue)} VNĐ</div>
          </div>
          <div className="row">
            <div className="col-4">Phí chuyển nhượng</div>
            <div className="col-8">: 0</div>
          </div>
          <div className="row">
            <div className="col-4">Thuế TNCN tạm khấu trừ</div>
            <div className="col-8">: {currency(info.taxValue)} VNĐ</div>
          </div>
          <p>
            <i>
              (Thuế TNCN tạm khấu trừ = Tổng giá trị chuyển nhượng x {currency(info.taxPit)}
              %)
            </i>
          </p>
          <div className="confirm-content">
            <p>
              Công ty cổ phần chứng khoán MB được sở hữu, hưởng mọi quyền lợi và chịu trách nhiệm về
              số Trái Phiếu chuyển nhượng nói trên kể từ ngày có xác nhận đăng ký chuyển nhượng của
              Công ty Cổ phần Chứng khoán MB.
            </p>
            <p>
              {bond.issuerBond} ủy quyền cho Công ty Cổ phần Chứng khoán MB xác nhận đăng ký chuyển
              nhượng theo yêu cầu của các Nhà Đầu Tư. Công ty Cổ phần Chứng khoán MB chỉ xác nhận
              tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu Trái Phiếu, không xác nhận việc
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
              <button
                onClick={() => this._onUpdate()}
                type="button"
                className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
              >
                XÁC NHẬN
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Confirm.propTypes = {
  bond: PropTypes.object,
  info: PropTypes.object,
  update: PropTypes.func
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
)(Confirm);
