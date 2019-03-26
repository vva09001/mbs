import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import accountActions from '../../store/account/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.checkAuth(this.props.match.params)
  }
  render() {
    return (
      <Layout type={3}>
        <div className="row">
          <div className="col-12">
            <h6 className="text-primary mt-2 mb-3">Tất cả</h6>
          </div>
        </div>
        <div className="row">
          <div className="nav nav-tabs">
            <button className="nav-item nav-link">Viễn thông</button>
            <button className="nav-item nav-link">Hóa đơn</button>
            <button className="nav-item nav-link active">Tài chính, bảo hiểm</button>
            <button className="nav-item nav-link">Mua sắm, du lịch</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-primary mt-3 mb-3">
              <img alt="logo" src="/img/logo.png" className="mr-2" />
              CTCP Chứng khoán MB
            </h6>
          </div>
        </div>
        <div className="row white-bg ">
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
  checkAuth: PropTypes.func
};

const mapStateToProps = state => {
  return {
    auth: state.Account.auth
  };
};

const mapDispatchToProps = {
  checkAuth: accountActions.auth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
