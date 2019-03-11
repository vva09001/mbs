import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/common/card';
// import bondsActions from '../../store/coin/actions';

class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Layout type title="Danh mục trái phiếu có thể bán">
        <h3 className="text-riht">Tổng giá trị: 10,000,000 VNĐ</h3>
        {_.map(this.props.bonds, item => (
          <Card item={item} key={item.id}>
            <li className="list-group-item">
              Giá trị đầu
              <p className="float-right">
                <span className="quatity">100000000</span> trái phiếu
              </p>
            </li>
            <li className="list-group-item">
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
