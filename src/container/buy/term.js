import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Layout from '../layout/layout';

class Term extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bond } = this.props;
    const path = '/buy/' + this.props.bond.bondCode;
    return (
      <Layout type={1} path={path} title="Đặt lệnh mua">
        <div className="bond-detail">
          <h2 className="text-center color-1">Các điều khoản và điều kiện khi giao dịch mua Trái Phiếu</h2>
          <div className="bg-white p-4 mt-3 rounded border border-secondary">
            Nội dung trong bảng dưới đây, các thông tin trong ký hiệu […] là do MBS trả thông tin sang
          </div>
        </div>
      </Layout>
    );
  }
}

Term.propTypes = {
  bond: PropTypes.object
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
)(Term);
