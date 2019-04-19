import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Layout from 'container/layout/layout-noAuth';
import buyActions from 'store/buy/actions';
import authActions from 'store/auth/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.merchant_code) {
      this.props.checkAuth(query);
    }
  }
  render() {
    return (
      <Layout type={3}>
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-primary mt-3 mb-3">
              <img
                alt="logo"
                src="/img/logo.png"
                srcSet="/img/logo.png 2x, /img/logo.png 1x"
                className="mr-2"
              />
              CTCP Chứng khoán MB
            </h6>
          </div>
        </div>
        <div className="row white-bg h-100 ">
          <div className="col-12 text-center">
            <Link to="/buy/">
              <div className="col-12 btn btn-transparent h6 text-primary">
                <div className="button-buy">
                  <img src="/img/btnBUY.svg" alg="buy" />
                </div>
              </div>
            </Link>
            <Link to="/sell/">
              <div className="col-12 btn btn-transparent h6 text-primary">
                <div className="button-sell">
                  <img src="/img/btnSELL.svg" alg="buy" />
                </div>
              </div>
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
