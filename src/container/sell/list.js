import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/sell/card';
import Loading from '../../components/common/loading';
import sellActions from '../../store/sell/actions';

class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1
    });
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Layout type={2} title="Danh mục TP có thể bán">
        <h3 className="text-right mt-3 mb-3">Tổng giá trị: 10,000,000 VNĐ</h3>
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id} />
        ))}
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  getList: PropTypes.func,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bonds: state.Sell.list
  };
};

const mapDispatchToProps = {
  getList: sellActions.get
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);