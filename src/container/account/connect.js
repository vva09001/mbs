import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Layout from '../layout/layout';
import accountActions from '../../store/account/actions';

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }
  componentDidMount() {}
  _onChange = (e, param) => {
    const value = e.target.value;
    this.setState({
      params: {
        ...this.state.params,
        [param]: value
      }
    });
  };
  _onClick = () => {
    this.props.checkLink(this.state.params);
  };
  render() {
    return (
      <Layout type={2} title="Yêu cầu liên kết tài khoản">
        <div className="bond-detail">
          <div className="row justify-content-center">
            <div className="form-group col-12">
              <label>Số CMTND</label>
              <input
                onChange={e => this._onChange(e, 'customerId')}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-12">
              <label>Số TKCK</label>
              <input
                onChange={e => this._onChange(e, 'accountCode')}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-12">
              <label>Số điện thoại di động</label>
              <input
                onChange={e => this._onChange(e, 'mobile')}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-12">
              <label>Mật khẩu</label>
              <input
                onChange={e => this._onChange(e, 'password')}
                type="password"
                className="form-control"
              />
              <small className="form-text text-muted">
                (Mật khẩu là mật khẩu giao dịch tại MBS)
              </small>
            </div>
            <div className="col-9">
              <button
                type="button"
                onClick={() => this._onClick()}
                className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
              >
                LIÊN KẾT TÀI KHOẢN
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Connect.propTypes = {
  location: PropTypes.object,
  checkLink: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  checkLink: accountActions.checkLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
