import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';
import Card from 'components/buy/card';
import Loading from 'components/common/loading';
import Pagination from 'components/common/Pagination';
import bondsActions from 'store/bonds/actions';
import buyActions from 'store/buy/actions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      query: {
        num: 40,
        order: 0,
        page: 1
      }
    };
  }
  componentDidMount() {
    this.props.bondsFetch(this.state.query);
  }
  _fetchDetail = params => {
    this.props.bondsDetail(params);
    this.props.buyFetch(params);
  };
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
  };
  _bondsFetch = (order, pagination) => {
    this.setState(
      {
        query: {
          ...this.state.query,
          order: order,
          page: pagination || this.state.page
        }
      },
      () => {
        this.props.bondsFetch(this.state.query);
      }
    );
  };
  _toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  _showList = () => {
    return _.map(this.props.bonds, item => (
      <Card
        onDetail={this._onDetail}
        fetchDetail={this._fetchDetail}
        item={item}
        key={item.bondCode}
      />
    ));
  };
  onPagination = page => {
    this.setState(
      {
        query: {
          ...this.state.query,
          page: page
        }
      },
      () => {
        this.props.bondsFetch(this.state.query);
      }
    );
  };
  render() {
    return (
      <Layout
        toggle={this.state.toggle}
        onClick={this._bondsFetch}
        onToggle={this._toggle}
        filterPicked={this.state.query.order}
        title="product"
        active="/buy/"
      >
        {this.props.loading ? (
          <Loading />
        ) : this.props.bonds.length === 0 ? (
          <div className="text-center wapper" />
        ) : (
          this._showList()
        )}
        <Pagination
          onClick={this.onPagination}
          number={this.state.query.num}
          total={this.props.total}
          page={this.state.query.page}
        />
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  loading: PropTypes.bool,
  bondsFetch: PropTypes.func,
  profile: PropTypes.object,
  buyFetch: PropTypes.func,
  bondsDetail: PropTypes.func,
  t: PropTypes.func,
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list,
    total: state.Bonds.total,
    profile: state.Account.profile,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  buyFetch: buyActions.getBuy,
  bondsFetch: bondsActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(List));
