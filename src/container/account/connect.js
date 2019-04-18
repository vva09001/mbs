import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Check from 'container/account/check';
import Otp from 'container/account/otp';
import Layout from 'container/layout/layout';

const Connect = props => {
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
  step: PropTypes.number
};

const mapStateToProps = state => {
  return {
    step: state.Account.step
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
