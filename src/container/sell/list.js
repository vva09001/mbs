import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import Card from 'components/sell/card';
import Loading from 'components/common/loading';
import Pagination from 'components/common/Pagination';
import { sellActions, bondsActions } from 'store/actions';
import history from 'utils/history';

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
  _getContract = params => {
    this.props.getContract(params);
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
  render() {
    const { t } = this.props;
    return (
      <Layout type={2} title={t('BÁN TRÁI PHIẾU')}>
        <div className="sell-title">
          <div className="row">
            <div className="col-6 no-pading-right">
              <div className="title-left bold tar">{t('Tổng giá trị đầu tư')}: </div>
            </div>
            <div className="col-6 no-pading-left">
              <div className="bold tar">
                {currency(this.props.total)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 no-pading-right">
              <div className="title-left bold tar">{t('Tổng')}: </div>
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
        <div className="list-conatainer">
          {this.props.loading ? <Loading /> : this.props.bonds.length === 0 ? (
            <div className="text-center wapper" />
          ) : (
            _.map(this.props.bonds, (item, index) => (
              <Card onDetail={this._onDetail} item={item} key={index} onClick={this._getContract} />
            ))
          )}
          <Pagination
            onClick={this.onPagination}
            number={this.state.query.num}
            total={this.props.total_list}
            page={this.state.query.page}
          />
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
  t: PropTypes.func,
  total_list: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Sell.list,
    total: state.Sell.total,
    loading: state.Sell.loading,
    total_list: state.Sell.total_list
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
