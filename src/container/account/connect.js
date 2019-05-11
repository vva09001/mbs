import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Check from 'container/account/check';
import Otp from 'container/account/otp';
import qs from 'query-string';
import Layout from 'container/layout/layout-noAuth';
import { Redirect } from 'react-router';
import { accountActions, authActions } from 'store/actions';
import history from 'utils/history';

class Connect extends Component {
  componentDidMount() {
    this.props.resetStep();
    const query = qs.parse(this.props.location.search);
    if (query.merchant_code) {
      this.props.checkAuth(query);
    } else {
      if (!this.props.isLoggedIn || this.props.isLinked) {
        history.push({ pathname: '/' });
      }
    }
  }
  render() {
    return (
      <Layout type={1} title="Yêu cầu liên kết tài khoản">
        <div className="bond-detail pt-3">
          {this.props.step === 1 && <Check />}
          {this.props.step === 2 && <Otp />}
        </div>
      </Layout>
    );
  }
}

Connect.propTypes = {
  isLinked: PropTypes.bool,
  resetStep: PropTypes.func,
  step: PropTypes.number,
  checkAuth: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false,
    isLinked: state.Account.profile.isExist === 1 ? true : false,
    step: state.Account.step
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: authActions.auth,
    resetStep: () => {
      dispatch({ type: accountActions.LINK_STEP, step: 1 });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
