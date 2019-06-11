import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'container/layout/layout-noAuth';
import { buyActions, authActions } from 'store/actions';
import accountActions from 'store/account/actions';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import './homeTest.scss';

class HomeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      customerId: ''
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onEnter = e => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      this.onSubmitUserId();
    }
  };
  onSubmitUserId = () => {
    if (this.state.userId) {
      this.props.setAccount({
        userId: this.state.userId,
        customerId: this.state.customerId,
        channel: 'VT'
      });
      alert('Đăng nhập thành công');
      this.onGetLinkTest();
    } else {
      alert('Nhập thiếu thông tin!');
    }
  };
  onGetLinkTest = () => {
    if (this.props.userId) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/api/account/genUrl?msisdn=${
            this.props.userId
          }&customerId=${this.props.customerId}`
        )
        .then(function(response) {
          if (response.data.location) {
            window.location.replace(response.data.location);
          }
        })
        .catch(function() {});
    }
  };
  onLogout = () => {
    this.props.setAccount({
      userId: null,
      channel: 'VT'
    });
    alert('Đã thoát!');
  };

  render() {
    return (
      <Layout type={1} title="MÀN HÌNH ĐĂNG NHẬP">
        <div className="form-test">
          <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
          <div className="form-group box-test-user">
            {!this.props.userId && (
              <React.Fragment>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập SĐT"
                  onKeyDown={this.onEnter}
                  name="userId"
                  value={this.state.userId}
                  onChange={this.onChange}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập CMT"
                  onKeyDown={this.onEnter}
                  name="customerId"
                  value={this.state.customerId}
                  onChange={this.onChange}
                />
                <button className="btn btn-info" onClick={this.onSubmitUserId}>
                  Đăng nhập
                </button>
              </React.Fragment>
            )}
            {this.props.userId && (
              <React.Fragment>
                <button className="btn btn-info mb-2" onClick={this.onGetLinkTest}>
                  Xác thực
                </button>
                <button className="btn btn-info" onClick={this.onLogout}>
                  Thoát
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

HomeTest.propTypes = {
  customerId: PropTypes.string,
  userId: PropTypes.string,
  setAccount: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    auth: state.Account.auth,
    userId: state.Account.profile.userId,
    customerId: state.Account.profile.customerId
  };
};

const mapDispatchToProps = {
  checkAuth: authActions.auth,
  verifyResult: buyActions.verifyResult,
  setAccount: profile => accountActions.setAccount(profile)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomeTest));
