import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import { useTranslation } from 'react-i18next';

const Info = ({ detail }) => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="Thông tin Trái phiếu">
      <div className="bond-detail pdt10">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td width="50%">
                <b>{t(`Tổ Chức Phát Hành`)}</b>
              </td>
              <td width="50%">{detail.issuerBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Trái Phiếu`)}</b>
              </td>
              <td>{detail.bondCode}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Mệnh Giá`)}</b>
              </td>
              <td>
                {currency(detail.parValue)} {t(`VNĐ`)}/ {t(`TP`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Giá Phát Hành`)}</b>
              </td>
              <td>
                {currency(detail.issuePrice)}% {t(`Mệnh Giá`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Kỳ Hạn`)}</b>
              </td>
              <td>{detail.termBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Ngày Phát Hành`)}</b>
              </td>
              <td>{detail.releaseDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Ngày Đáo Hạn`)}</b>
              </td>
              <td>{detail.maturityDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Lãi Suất`)}</b>
              </td>
              <td>
                {t(`Lãi suất áp dụng cho`)} {detail.termFixCount}{' '}
                {t(`kỳ tính lãi đầu tiên của TP là`)} {currency(detail.interestFixRate)}{' '}
                {t(`%/năm`)}.
                {detail.interestFloatRange !== 0
                  ? t(
                      `Lãi suất áp dụng cho các kỳ tính lãi tiếp theo của Trái Phiếu sẽ được xác định bằng lãi suất tham chiếu cộng (+) biên độ`
                    ) +
                    detail.interestFloatRange +
                    t(`%/năm`)
                  : ''}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Kỳ Thanh Toán Lãi`)}</b>
              </td>
              <td>
                {detail.couponPayment} {t(`tháng/lần`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Hình Thức`)}</b>
              </td>
              <td>{detail.releaseForm}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Quyền Liên Quan Đến Trái Phiếu`)}</b>
              </td>
              <td>{detail.rightBuyDesc}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Đại Lý Đăng Ký Lưu Ký`)}</b>
              </td>
              <td>{detail.paymentAgents}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Đại Lý Thanh Toán`)}</b>
              </td>
              <td>{detail.paymentAgents}</td>
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
