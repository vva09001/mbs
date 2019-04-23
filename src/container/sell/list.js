import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import Card from 'components/sell/card';
import Loading from 'components/common/loading';
import sellActions from 'store/sell/actions';
import bondsActions from 'store/bonds/actions';
import history from 'utils/history';

class List extends Component {
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1
    });
  }
  _getContract = params => {
    this.props.getContract(params);
  };
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
    history.push({ pathname: '/buy/info/' });
  };
  render() {
    const { t } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Layout type={2} title="Danh mục TP có thể bán">
        <div className="row sell-title">
          <div className="col-7 no-pading-right no-pading-left">
            <div className="text-center mt-3 mb-3">
              {t('Tổng giá trị đầu tư')}: <br />
              <div className="bold">
                {currency(this.props.total)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="col-5 no-pading-right no-pading-left">
            <div className="text-center mt-3 mb-3">
              {t('Tổng số lượng')}:{' '}
              <div className="bold">
                {this.props.bonds.length} {t('hợp đồng')}
              </div>
            </div>
          </div>
        </div>
        <div className="list-conatainer">
          {_.map(this.props.bonds, (item, index) => (
            <Card onDetail={this._onDetail} item={item} key={index} onClick={this._getContract} />
          ))}
          {this.props.bonds === null ||
            (this.props.bonds.length === 0 && (
              <div className="text-center wapper">
                {t('Không có Trái phiếu nào có thể bán')}
                <div className="icon-noProduct">
                  <img src="/img/iconfinder.svg" alt="logo" />
                </div>
              </div>
            ))}
        </div>
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  getList: PropTypes.func,
  bondsDetail: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
  getContract: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bonds: state.Sell.list,
    total: state.Sell.total
  };
};

const mapDispatchToProps = {
  getList: sellActions.get,
  getContract: sellActions.getContract,
  bondsDetail: bondsActions.detail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(List));
