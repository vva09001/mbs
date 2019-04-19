import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';

class Term extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { t } = this.props;
    return (
      <Layout type={1} title="Xác thực giao dịch mua">
        <div className="bond-detail">
          <h4 className="text-center mtitle text-uppercase">
            {t('CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN KHI GIAO DỊCH MUA Trái phiếu')}
          </h4>
          <div className="bg-white p-4 mt-3 rounded border border-secondary">
            {t(
              'Nội dung trong bảng dưới đây, các thông tin trong ký hiệu […] là do MBS trả thông tin sang'
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

Term.propTypes = {
  bond: PropTypes.object,
  t: PropTypes.func
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
)(withTranslation()(Term));
