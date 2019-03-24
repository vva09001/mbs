import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Layout from '../layout/layout';
import bondsActions from '../../store/bonds/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  goTo(page) {
    history.push({ pathname: page });
  }
  render() {
    return (
      <Layout type={3}>
        <div className="row">
          <div className="col-12">
            <h6 className="text-primary mt-2 mb-3">Tất cả</h6>
          </div>
        </div>
        <div className="row">
          <div className="nav nav-tabs">
            <button className="nav-item nav-link">Viễn thông</button>
            <button className="nav-item nav-link">Hóa đơn</button>
            <button className="nav-item nav-link active">Tài chính, bảo hiểm</button>
            <button className="nav-item nav-link">Mua sắm, du lịch</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h6 className="text-primary mt-3 mb-3">
              <img alt="logo" src="/img/logo.png" className="mr-2" />
              CTCP Chứng khoán MB
            </h6>
          </div>
        </div>
        <div className="row white-bg ">
          <div className="col-12 text-center">
            <button
              onClick={() => this.goTo('/bonds/buy/list')}
              className="m-5 buy-button btn btn-transparent h6 text-primary"
            >
              <span className="mt-2">
                <img src="/img/buy.png" alg="buy" />
              </span>
              Mua
            </button>
            <button
              onClick={() => this.goTo('/bonds/sale/list')}
              className="m-5 buy-button btn btn-transparent h6 text-primary"
            >
              <span className="mt-2">
                <img src="/img/sell.png" alg="buy" />
              </span>
              Bán
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  bonds: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsFetch: bondsActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
