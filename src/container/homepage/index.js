import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout-noAuth';
import buyActions from 'store/buy/actions';
import authActions from 'store/auth/actions';

class HomePage extends Component {
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.merchant_code) {
      this.props.checkAuth(query);
    }
  }
  render() {
    const { t } = this.props;
    return (
      <Layout type={3} active="/">
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-primary mt-3 mb-3">
              <img alt="logo" src="/img/logo_MBS.svg" className="mr-2 logoMBS" />
              {t('CTCP Chứng khoán MB')}
            </h6>
          </div>
        </div>
        <div className="row white-bg h-100 ">
          <div className="col-12 text-center">
            <div className="col-12 btn btn-transparent h6 text-primary">
              <div className="button-buy">
                <Link to="/buy/">
                  <img src="/img/ic_buy.svg" alt="buy" />
                  <div className="text-buy">
                    <h3>{t('MUA TRÁI PHIẾU')}</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 btn btn-transparent h6 text-primary">
              <div className="button-sell">
                <Link to="/sell/">
                  <img src="/img/ic_sale.svg" alt="sell" />
                  <div className="text-sell">
                    <h3>{t('BÁN TRÁI PHIẾU')}</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  checkAuth: PropTypes.func,
  verifyResult: PropTypes.func,
  auth: PropTypes.bool,
  match: PropTypes.object,
  location: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  checkAuth: authActions.auth,
  verifyResult: buyActions.verifyResult
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePage));
