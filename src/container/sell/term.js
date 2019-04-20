import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';

const Term = () => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="Xác thực giao dịch bán">
      <div className="bond-detail">
        <h4 className="text-center mtitle text-uppercase">
          {t('CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN KHI GIAO DỊCH BÁN TRÁI PHIẾU.')}
        </h4>
        <div className="bg-white p-4 mt-3 rounded border border-secondary">
          {t(
            'Nội dung trong bảng dưới đây, các thông tin trong ký hiệu […] là do MBS trả thông tin sang'
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Term;
