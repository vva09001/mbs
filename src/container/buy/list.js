import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/buy/card';
import Loading from '../../components/common/loading';
import bondsActions from '../../store/bonds/actions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  componentDidMount() {
    this.props.bondsFetch({
      userid: this.props.profile.id,
      channel: 'VT',
      num: 40,
      page: 1
    });
  }
  _toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <Layout toggle={this.state.toggle} onToggle={this._toggle} title="Sản phẩm">
        {this.props.loading && <Loading />}

        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.bondCode} />
        ))}
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  loading: PropTypes.bool,
  bondsFetch: PropTypes.func,
  profile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list,
    profile: state.Account.profile,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsFetch: bondsActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);