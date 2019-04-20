import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'query-string';
import buyActions from 'store/buy/actions';
import Layout from 'container/layout/layout';

class Verify extends Component {
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.error_code) {
      this.props.verifyResult(query);
    }
  }
  render() {
    return (
      <Layout>
        <Fragment />
      </Layout>
    );
  }
}

Verify.propTypes = {
  verifyResult: PropTypes.func,
  location: PropTypes.object
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  verifyResult: buyActions.verifyResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify);
