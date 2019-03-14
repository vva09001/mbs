import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../../layout/layout';
import Card from '../../../components/sale/card';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type={2} title="Danh mục TP có thể bán">
        <h3 className="text-right mt-3 mb-3">Tổng giá trị: 10,000,000 VNĐ</h3>
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id}>
            <li className="list-group-item justify-content-end">
              <button className="btn btn-primary">Bán</button>
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
