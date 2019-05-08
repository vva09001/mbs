import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Check from 'container/account/check';
import Otp from 'container/account/otp';
import Layout from 'container/layout/layout';
import { Redirect } from 'react-router';
import { accountActions } from 'store/actions';

class Connect extends Component {
  componentDidMount() {
    this.props.resetStep();
  }
  render() {
    if (this.props.isLinked) {
      return <Redirect to="/" />;
    }
    return (
      <Layout type={1} title="Yêu cầu liên kết tài khoản">
        <div className="bond-detail pt-3 max-hieght">
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
  step: PropTypes.number
};

const mapStateToProps = state => {
  return {
    isLinked: state.Account.profile.isExist === 1 ? true : false,
    step: state.Account.step
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetStep: () => {
      dispatch({ type: accountActions.LINK_STEP, step: 1 });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
