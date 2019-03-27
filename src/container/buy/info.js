import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';

const Info = ({ detail }) => {
  return (
    <Layout type={1} title="Thông tin trái phiếu">
      <div className="bond-detail">
        <h2 className="text-center color-1 mb-4">Thông tin về trái phiếu đăng ký mua</h2>
        <table className="table table-bordered bg-white">
          <tr>
            <td width="50%">
              <b>Tổ chức Phát hành</b>
            </td>
            <td width="50%">{detail.issuerBond}</td>
          </tr>
          <tr>
            <td>
              <b>Mã Trái Phiếu</b>
            </td>
            <td>{detail.bondCode}</td>
          </tr>
          <tr>
            <td>
              <b>Mệnh giá Trái Phiếu</b>
            </td>
            <td>{detail.parValue} VNĐ/ Trái Phiếu</td>
          </tr>
          <tr>
            <td>
              <b>Giá phát hành</b>
            </td>
            <td>{detail.issuePrice}% mệnh giá</td>
          </tr>
          <tr>
            <td>
              <b>Kỳ hạn Trái Phiếu</b>
            </td>
            <td>{detail.termBond} năm</td>
          </tr>
          <tr>
            <td>
              <b>Ngày phát hành</b>
            </td>
            <td>{detail.releaseDate}</td>
          </tr>
          <tr>
            <td>
              <b>Ngày đáo hạn</b>
            </td>
            <td>{detail.maturityDate}</td>
          </tr>
          <tr>
            <td>
              <b>Lãi suất Trái Phiếu</b>
            </td>
            <td>Lãi suất áp dụng cho 2 kỳ tính lãi đầu tiên của Trái Phiếu là 10.8%/năm</td>
          </tr>
          <tr>
            <td>
              <b>Ngày thanh toán Lãi</b>
            </td>
            <td>
              Tiền lãi Trái Phiếu được trả sau, đình kỳ mỗi 6 tháng một lần vào ngày cuối cùng của
              mỗi Kỳ Tính Lãi
            </td>
          </tr>
          <tr>
            <td>
              <b>Hình thức</b>
            </td>
            <td>{detail.releaseForm}</td>
          </tr>
          <tr>
            <td>
              <b>Quyền liên quan đến Trái Phiếu</b>
            </td>
            <td>{detail.rightBuyDesc}</td>
          </tr>
          <tr>
            <td>
              <b>Đại lý đăng ký và thanh toán</b>
            </td>
            <td>{detail.depositAgents}</td>
          </tr>
        </table>
      </div>
    </Layout>
  );
};

Info.propTypes = {
  detail: PropTypes.object
};

const mapStateToProps = state => {
  return {
    info: state.Buy.info,
    detail: state.Bonds.detail
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
