import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from 'container/layout/layout';
import Card from 'components/trade/card';
import accountActions from 'store/account/actions';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1,
      order: 0
    });
  }
  render() {
    return (
      <Layout type={2} title="TRÁI PHIẾU NẮM GIỮ">
        {_.map(this.props.bonds, (item, index) => (
          <Card item={item} key={index} />
        ))}
      </Layout>
    );
  }
}

List.propTypes = {
  getList: PropTypes.func,
  bonds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    bonds: state.Account.list
  };
};

const mapDispatchToProps = {
  getList: accountActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
