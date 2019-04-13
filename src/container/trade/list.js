import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Layout from '../layout/layout';
import Card from '../../components/trade/card';
import Loading from '../../components/common/loading';
import tradeActions from '../../store/trade/actions';

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
  _onClick = params => {
    this.props.getDetail(params);
  };
  render() {
    return (
      <Layout type={2} title="Quản lý giao dịch">
        {this.props.loading ? (
          <Loading />
        ) : (
          _.map(this.props.bonds, (item, index) => (
            <Card item={item} key={index}>
              <li className="list-group-item justify-content-center">
                <button
                  onClick={() =>
                    this._onClick({
                      type: 'delete',
                      contractCode: item.sellContractCode
                    })
                  }
                  className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
                >
                  HUỶ GIAO DỊCH
                </button>
                <button
                  onClick={() =>
                    this._onClick({
                      type: 'edit',
                      contractCode: item.sellContractCode
                    })
                  }
                  className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block ml-1"
                >
                  SỬA GIAO DỊCH
                </button>
              </li>
            </Card>
          ))
        )}
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  getList: PropTypes.func,
  getDetail: PropTypes.func,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bonds: state.Trade.list,
    loading: state.Trade.loading
  };
};

const mapDispatchToProps = {
  getList: tradeActions.list,
  getDetail: tradeActions.detail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
