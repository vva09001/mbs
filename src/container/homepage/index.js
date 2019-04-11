import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Layout from '../layout/layout-noAuth';
import buyActions from '../../store/buy/actions';
import authActions from '../../store/auth/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    const query = qs.parse(this.props.location.search);
    if (query.error_code) {
      this.props.verifyResult(query);
    }
    if (query.merchant_code) {
      this.props.checkAuth(this.props.location.search);
    }
  }
  render() {
    return (
      <Layout type={3}>
        <div className="row">
          <div className="col-12">
            <h6 className="text-primary mt-3 mb-3">Tất cả</h6>
          </div>
        </div>
        <div className="row">
          <div className="nav nav-tabs horizontal-scroll">
            <button className="nav-item nav-link">Viễn thông</button>
            <button className="nav-item nav-link">Hóa đơn</button>
            <button className="nav-item nav-link active">Tài chính, bảo hiểm</button>
            <button className="nav-item nav-link">Mua sắm, du lịch</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-primary mt-3 mb-3">
              <img
                alt="logo"
                src="/img/logo.png"
                srcSet="/img/logo@3x.png 3x, /img/logo.png 2x, /img/logo.png 1x"
                className="mr-2"
              />
              CTCP Chứng khoán MB
            </h6>
          </div>
        </div>
        <div className="row white-bg h-100 ">
          <div className="col-12 text-center">
            <Link to="/buy/">
              <span className="m-5 buy-button btn btn-transparent h6 text-primary">
                <span className="mt-2">
                  <img src="/img/buy.png" alg="buy" />
                </span>
                Mua
              </span>
            </Link>
            <Link to="/sell/">
              <span className="m-5 buy-button btn btn-transparent h6 text-primary">
                <span className="mt-2">
                  <img src="/img/sell.png" alg="buy" />
                </span>
                Bán
              </span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  checkAuth: PropTypes.func,
  verifyResult: PropTypes.func,
  auth: PropTypes.bool,
  match: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  checkAuth: authActions.auth,
  verifyResult: buyActions.verifyResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
