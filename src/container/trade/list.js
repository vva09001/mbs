import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';
import Card from 'components/trade/card';
import Loading from 'components/common/loading';
import { bondsActions, tradeActions } from 'store/actions';
import history from 'utils/history';
import Pagination from 'components/common/Pagination';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {
        num: 40,
        page: 1
      }
    };
  }
  componentDidMount() {
    this.props.getList(this.state.query);
  }
  _onClick = params => {
    this.props.getDetail(params);
  };
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
    history.push({ pathname: '/buy/info/' });
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
        this.props.getList(this.state.query);
      }
    );
  };
  _showList = () => {
    return _.map(this.props.bonds, (item, index) => (
      <Card onDetail={this._onDetail} item={item} key={index}>
        <li className="list-group-item justify-content-center">
          <button
            onClick={() =>
              this._onClick({
                type: 'delete',
                contractCode: item.sellContractCode
              })
            }
            className="button-delete rounded-pill border-0 btn-lg btn-block mr-2"
          >
            {this.props.t('cancel')}
          </button>
          <button
            onClick={() =>
              this._onClick({
                type: 'edit',
                contractCode: item.sellContractCode
              })
            }
            className="button-trade rounded-pill border-0 btn-lg btn-block m-0"
          >
            {this.props.t('edit')}
          </button>
        </li>
      </Card>
    ));
  };
  render() {
    const { t } = this.props;
    return (
      <Layout type={2} title="transaction_management" active="/trade/">
        <div className="sell-title">
          <div className="row">
            <div className="col-6 no-pading-right">
              <div className="title-left bold tar">{t('total')}: </div>
            </div>
            <div className="col-6 no-pading-left">
              <div className="title-right">
                <div className="bold">
                  {this.props.bonds.length} {t('contract')}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.loading ? (
          <Loading />
        ) : this.props.bonds.length === 0 ? (
          <div className="text-center " />
        ) : (
          <div className="custom-card">{this._showList()}</div>
        )}
        <Pagination
          onClick={this.onPagination}
          number={this.state.query.num}
          total={this.props.total_list}
          page={this.state.query.page}
        />
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  getList: PropTypes.func,
  getDetail: PropTypes.func,
  bondsDetail: PropTypes.func,
  t: PropTypes.func,
  loading: PropTypes.bool,
  total: PropTypes.number,
  total_list: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Trade.list,
    total: state.Sell.total,
    total_list: state.Trade.total,
    loading: state.Trade.loading
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  getList: tradeActions.list,
  getDetail: tradeActions.detail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(List));
