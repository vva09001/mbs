import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/trade/card';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type={2} title="Quản lý giao dịch">
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id} />
        ))}
      </Layout>
    );
  }
}

List.propTypes = {
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
)(List);
