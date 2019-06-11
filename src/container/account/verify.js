import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { accountActions } from 'store/actions';
import Loading from 'components/common/loading';

class Verify extends Component {
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.error_code) {
      this.props.verifyResult(query);
    }
  }
  render() {
    return (
      <div className="text-center">
        <Loading />
      </div>
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
  verifyResult: accountActions.verifyResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify);
