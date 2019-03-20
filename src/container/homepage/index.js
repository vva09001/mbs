import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/common/card';
import Loading from '../../components/common/loading';
import bondsActions from '../../store/bonds/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.bondsFetch({
      userid:1212,
      channel: 'VT'
    })
  }
  render() {
    return (
      <Layout type="3" title="Sản phẩm">
        {
          this.props.loading && <Loading />
        }

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
    bonds: state.Bonds.list,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsFetch: bondsActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
