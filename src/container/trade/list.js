import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/trade/card';
// import bondsActions from '../../store/coin/actions';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type={2} title="Quản lý giao dịch">
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id}>
            <li className="list-group-item justify-content-end">
              <button className="btn btn-primary">Hủy giao dịch</button>
              <button className="btn btn-primary ml-3">Sửa giao dịch</button>
            </li>
          </Card>
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
