import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';

const Info = ({ detail }) => {
  return (
    <Layout type={1} title="Thông tin trái phiếu">
      <div className="bond-detail">
        <h4 className="text-center mtitle text-uppercase">
          <img alt="popup-click" src="/img/popup-icon.png" className="mr-2" />
          Thông tin về Trái phiếu đăng ký mua
        </h4>
        <table className="table table-bordered bg-white">
          <tbody>
            <tr>
              <td width="50%">
                <b>Tổ chức Phát hành</b>
              </td>
              <td width="50%">{detail.issuerBond}</td>
            </tr>
            <tr>
              <td>
                <b>Mã Trái phiếu</b>
              </td>
              <td>{detail.bondCode}</td>
            </tr>
            <tr>
              <td>
                <b>Mệnh giá Trái phiếu</b>
              </td>
              <td>{currency(detail.parValue)} VNĐ/ Trái phiếu</td>
            </tr>
            <tr>
              <td>
                <b>Giá phát hành</b>
              </td>
              <td>{currency(detail.issuePrice)}% mệnh giá</td>
            </tr>
            <tr>
              <td>
                <b>Kỳ hạn Trái phiếu</b>
              </td>
              <td>{detail.termBond}</td>
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
                <b>Lãi suất Trái phiếu</b>
              </td>
              <td>
                Lãi suất áp dụng cho {detail.termFixCount} kỳ tính lãi đầu tiên của Trái phiếu là{' '}
                {currency(detail.interestFixRate)} %/năm.
                {detail.interestFloatRange !== 0
                  ? `Lãi suất áp dụng cho các kỳ tính lãi tiếp theo của Trái phiếu sẽ được xác định bằng lãi suất tham chiếu cộng (+) biên độ ${
                      detail.interestFloatRange
                    } %năm`
                  : ''}
              </td>
            </tr>
            <tr>
              <td>
                <b>Ngày thanh toán Lãi</b>
              </td>
              <td>{detail.couponPayment} tháng/lần</td>
            </tr>
            <tr>
              <td>
                <b>Hình thức</b>
              </td>
              <td>{detail.releaseForm}</td>
            </tr>
            <tr>
              <td>
                <b>Quyền liên quan đến Trái phiếu</b>
              </td>
              <td>{detail.rightBuyDesc}</td>
            </tr>
            <tr>
              <td>
                <b>Đại lý đăng ký và thanh toán</b>
              </td>
              <td>Công ty cổ phần Chứng khoán MB</td>
            </tr>
          </tbody>
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
    detail: state.Bonds.detail
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
