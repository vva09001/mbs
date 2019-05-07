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
// import { currency } from 'utils/currency';
class List extends Component {
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1
    });
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
            {this.props.t('HUỶ')}
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
            {this.props.t('SỬA')}
          </button>
        </li>
      </Card>
    ));
  };
  render() {
    const { t } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Layout type={2} title="Quản lý giao dịch" active="/trade/">
        <div className="sell-title">
          <div className="row">
            <div className="col-6 no-pading-right">
              <div className="title-left bold tar">{t('Tổng số lượng')}: </div>
            </div>
            <div className="col-6 no-pading-left">
              <div className="title-right">
                <div className="bold">
                  {this.props.bonds.length} {t('Hợp đồng')}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.bonds.length === 0 ? (
          <div className="text-center " />
        ) : (
          <div className="custom-card">{this._showList()}</div>
        )}
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
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Trade.list,
    total: state.Sell.total,
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
