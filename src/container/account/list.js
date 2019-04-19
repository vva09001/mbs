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
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getList({
      num: 40,
      page: 1,
      order: 0
    });
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
        <h3 className="text-center mt-3 mb-3">
          {t('Tổng giá trị đầu tư')}:{' '}
          <span className="mspot">
            {currency(this.props.total)} {t('VNĐ')}
          </span>
        </h3>
        {_.map(this.props.bonds, (item, index) => (
          <Card onDetail={this._onDetail} item={item} key={index} />
        ))}
        {this.props.bonds === null ||
          (this.props.bonds.length === 0 && (
            <div className="text-center">
              <h1>{t('Không có Trái phiếu nào')}</h1>
            </div>
          ))}
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
