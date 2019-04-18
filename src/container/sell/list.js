import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import Card from 'components/sell/card';
import Loading from 'components/common/loading';
import sellActions from 'store/sell/actions';
import accountActions from 'store/account/actions';

class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1
    });
    this.props.getTotal();
  }
  _getContract = params => {
    this.props.getContract(params);
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Layout type={2} title="Danh mục TP có thể bán">
        <h3 className="text-right mt-3 mb-3">Tổng giá trị: {currency(this.props.total)} VNĐ</h3>
        {_.map(this.props.bonds, (item, index) => (
          <Card item={item} key={index} onClick={this._getContract} />
        ))}
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  getList: PropTypes.func,
  getTotal: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
  getContract: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bonds: state.Sell.list,
    total: state.Account.total
  };
};

const mapDispatchToProps = {
  getList: sellActions.get,
  getContract: sellActions.getContract,
  getTotal: accountActions.info
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
