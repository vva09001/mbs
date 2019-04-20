import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';
import Card from 'components/trade/card';
import Loading from 'components/common/loading';
import tradeActions from 'store/trade/actions';
import bondsActions from 'store/bonds/actions';
import history from 'utils/history';

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
  render() {
    const { t } = this.props;
    return (
      <Layout type={2} title="Quản lý giao dịch" active="/trade/">
        {this.props.loading ? (
          <Loading />
        ) : (
          _.map(this.props.bonds, (item, index) => (
            <Card onDetail={this._onDetail} item={item} key={index}>
              <li className="list-group-item justify-content-center">
                <button
                  onClick={() =>
                    this._onClick({
                      type: 'delete',
                      contractCode: item.sellContractCode
                    })
                  }
                  className="button-trade rounded-pill border-0 btn-lg btn-block mr-2"
                >
                  {t('HUỶ')}
                </button>
                <button
                  onClick={() =>
                    this._onClick({
                      type: 'edit',
                      contractCode: item.sellContractCode
                    })
                  }
                  className="button-trade rounded-pill border-0 btn-lg btn-block no-margin"
                >
                  {t('SỬA')}
                </button>
              </li>
            </Card>
          ))
        )}
        {this.props.bonds === null ||
          (this.props.bonds.length === 0 && (
            <div className="text-center">
              <h1>Không có Trái phiếu nào</h1>
            </div>
          ))}
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
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bonds: state.Trade.list,
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
