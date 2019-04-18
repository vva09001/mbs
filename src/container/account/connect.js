import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Check from 'container/account/check';
import Otp from 'container/account/otp';
import Layout from 'container/layout/layout';
import { Redirect } from 'react-router';

const Connect = props => {
  if (props.isLinked) {
    return <Redirect to="/" />;
  }
  return (
    <Layout disabledValidated={true} type={1} title="Yêu cầu liên kết tài khoản">
      <div className="bond-detail pt-3">
        {props.step === 1 && <Check />}
        {props.step === 2 && <Otp />}
      </div>
    </Layout>
  );
};

Connect.propTypes = {
  step: PropTypes.number,
  isLinked: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    step: state.Account.step,
    isLinked: state.Account.isExist === 1 ? true : false
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
