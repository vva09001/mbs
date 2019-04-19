import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import accountActions from 'store/account/actions';

class Check extends Component {
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
    const { t } = this.props;
    return (
      <form className="row justify-content-center">
        <div className="form-group col-12">
          <label>{t('Số CMTND')}</label>
          <input
            onChange={e => this._onChange(e, 'customerId')}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-12">
          <label>{t('Số TKCK')}</label>
          <input
            onChange={e => this._onChange(e, 'accountCode')}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-12">
          <label>{t('Mật khẩu')}</label>
          <input
            onChange={e => this._onChange(e, 'password')}
            type="password"
            className="form-control"
            required
          />
          <small className="form-text text-muted">
            ({t('Mật khẩu là mật khẩu giao dịch tại MBS')})
          </small>
        </div>
        <div className="col-9">
          <button
            type="button"
            onClick={() => this._onClick()}
            className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
          >
            {t('LIÊN KẾT TÀI KHOẢN')}
          </button>
        </div>
      </form>
    );
  }
}

Check.propTypes = {
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
)(withTranslation()(Check));
