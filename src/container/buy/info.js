import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';

const Info = props => {
  const path = '/buy/' + props.bond.bondCode;
  return (
    <Layout type={1} title="Thông tin trái phiếu">
      <div className="bond-detail">
        <h2 className="text-center color-1">Thông tin về trái phiếu đăng ký mua</h2>
        <table className="table table-bordered bg-white">
          <tr>
            <td width="50%">
              <b>Tổ chức Phát hành</b>
            </td>
            <td width="50%">Công ty Cổ phần Tập đoàn Đầu tư Địa ốc Nova (NVL)</td>
          </tr>
          <tr>
            <td>
              <b>Mã Trái Phiếu</b>
            </td>
            <td>NVL-01</td>
          </tr>
          <tr>
            <td>
              <b>Mệnh giá Trái Phiếu</b>
            </td>
            <td>100,000 VNĐ/ Trái Phiếu</td>
          </tr>
          <tr>
            <td>
              <b>Giá phát hành</b>
            </td>
            <td>100% mệnh giá</td>
          </tr>
          <tr>
            <td>
              <b>Kỳ hạn Trái Phiếu</b>
            </td>
            <td>1 năm</td>
          </tr>
          <tr>
            <td>
              <b>Ngày phát hành</b>
            </td>
            <td>14/02/2017</td>
          </tr>
          <tr>
            <td>
              <b>Ngày đáo hạn</b>
            </td>
            <td>14/02/2018</td>
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
            <td>Ghi sổ</td>
          </tr>
          <tr>
            <td>
              <b>Quyền liên quan đến Trái Phiếu</b>
            </td>
            <td>NVL012020</td>
          </tr>
          <tr>
            <td>
              <b>Đại lý đăng ký và thanh toán</b>
            </td>
            <td>Công ty cổ phần chứng khoán MB</td>
          </tr>
        </table>
      </div>
    </Layout>
  );
};

Info.propTypes = {
  bonds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
