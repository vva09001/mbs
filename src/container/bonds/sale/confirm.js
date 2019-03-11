import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../../layout/layout';
import Card from '../../../components/common/card';
// import bondsActions from '../../store/coin/actions';

class Confirm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type title="Xác thực giao dịch bán">
      </Layout>
    );
  }
}

Confirm.propTypes = {
  bonds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
