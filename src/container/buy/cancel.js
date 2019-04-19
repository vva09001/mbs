import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'query-string';
import buyActions from 'store/buy/actions';
import Layout from 'container/layout/layout';

class Cancel extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.error_code) {
      // this.props.cancelResult(query);
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

Cancel.propTypes = {
  cancelResult: PropTypes.func,
  location: PropTypes.object
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  cancelResult: buyActions.cancelResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cancel);
