import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from 'utils/currency';
import Layout from 'container/layout/layout';
import Card from 'components/account/card';
import accountActions from 'store/account/actions';
import bondsActions from 'store/bonds/actions';
import history from 'utils/history';

class List extends Component {
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1,
      order: 0
    });
    this.props.getTotal();
  }
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
    history.push({ pathname: '/buy/info/' });
  };
  render() {
    const { t } = this.props;
    return (
      <Layout type={2} title="Trái phiếu nắm giữ" active="/user/">
        <div className="row sell-title">
          <div className="col-7 no-pading-right no-pading-left">
            <div className="text-center mt-3 mb-3">
              {t('Tổng giá trị đầu tư')}:{' '}
              <div className="bold">
                {currency(this.props.total)} {t('VNĐ')}
              </div>
            </div>
          </div>
          <div className="col-5 no-pading-right no-pading-left">
            <div className="text-center mt-3 mb-3">
              {t('Tổng số lượng')}:{' '}
              <div className="bold">
                {this.props.bonds.length} {t('Hợp đồng')}
              </div>
            </div>
          </div>
        </div>
        <div />
        <div className="list-conatainer">
          {_.map(this.props.bonds, (item, index) => (
            <Card onDetail={this._onDetail} item={item} key={index} />
          ))}
          {this.props.bonds === null ||
            (this.props.bonds.length === 0 && (
              <div className="text-center wapper">
                {t('Không có Trái phiếu nào')}
                <div className="icon-noProduct">
                  <img src="/img/iconfinder_icon.png" alt="logo" />
                </div>
              </div>
            ))}
        </div>
      </Layout>
    );
  }
}

List.propTypes = {
  getList: PropTypes.func,
  bonds: PropTypes.array,
  getTotal: PropTypes.func,
  bondsDetail: PropTypes.func,
  t: PropTypes.func,
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bonds: state.Account.list,
    total: state.Account.total
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  getList: accountActions.list,
  getTotal: accountActions.info
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(List));
