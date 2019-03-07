import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/common/card';
// import bondsActions from '../../store/coin/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type title="Sản phẩm">
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id}/>
        ))}
      </Layout>
    );
  }
}

HomePage.propTypes = {
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
)(HomePage);
