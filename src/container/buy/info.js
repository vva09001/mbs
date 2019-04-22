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
      <div className="bond-detail">
        <h4 className="text-center mtitle text-uppercase">
          <img alt="popup-click" src="/img/popup-icon.png" className="mr-2" />
          {t(`Thông tin về Trái phiếu đăng ký mua`)}
        </h4>
        <table className="table table-bordered bg-white">
          <tbody>
            <tr>
              <td width="50%">
                <b>{t(`Tổ chức Phát hành`)}</b>
              </td>
              <td width="50%">{detail.issuerBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Mã Trái phiếu`)}</b>
              </td>
              <td>{detail.bondCode}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Mệnh giá Trái phiếu`)}</b>
              </td>
              <td>
                {currency(detail.parValue)} {t(`VNĐ`)}/ {t(`Trái phiếu`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Giá phát hành`)}</b>
              </td>
              <td>
                {currency(detail.issuePrice)}% {t(`mệnh giá`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Kỳ hạn Trái phiếu`)}</b>
              </td>
              <td>{detail.termBond}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Ngày phát hành`)}</b>
              </td>
              <td>{detail.releaseDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Ngày đáo hạn`)}</b>
              </td>
              <td>{detail.maturityDate}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Lãi suất Trái phiếu`)}</b>
              </td>
              <td>
                {t(`Lãi suất áp dụng cho`)} {detail.termFixCount}{' '}
                {t(`kỳ tính lãi đầu tiên của Trái phiếu là`)} {currency(detail.interestFixRate)}{' '}
                {t(`%/năm`)}.
                {detail.interestFloatRange !== 0
                  ? t(
                      `Lãi suất áp dụng cho các kỳ tính lãi tiếp theo của Trái phiếu sẽ được xác định bằng lãi suất tham chiếu cộng (+) biên độ`
                    ) +
                    detail.interestFloatRange +
                    t(`%/năm`)
                  : ''}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Ngày thanh toán Lãi`)}</b>
              </td>
              <td>
                {detail.couponPayment} {t(`tháng/lần`)}
              </td>
            </tr>
            <tr>
              <td>
                <b>{t(`Hình thức`)}</b>
              </td>
              <td>{detail.releaseForm}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Quyền liên quan đến Trái phiếu`)}</b>
              </td>
              <td>{detail.rightBuyDesc}</td>
            </tr>
            <tr>
              <td>
                <b>{t(`Đại lý đăng ký và thanh toán`)}</b>
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
