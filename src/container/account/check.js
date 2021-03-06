import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { accountActions } from 'store/actions';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { required } from 'utils/validation';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        accountCode: '',
        password: ''
      },
      toggle: {
        password: true
      }
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
  _onToggle = type => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [type]: !this.state.toggle[type]
      }
    });
  };
  render() {
    const { t } = this.props;
    return (
      <Form
        ref={c => {
          this.form = c;
        }}
        className="row justify-content-center"
      >
        <div className="form-group col-12">
          <p>
            <i>
              {t(
                'Quý khách vui lòng hoàn thiện các thông tin sau để hoàn tất yêu cầu liên kết tài khoản trước khi thực hiện giao dịch.'
              )}
            </i>
          </p>
        </div>
        <div className="form-group col-12">
          <label>{t('Số TKCK')}</label>
          <Input
            onChange={e => this._onChange(e, 'accountCode')}
            value={this.state.params.accountCode}
            name="accountCode"
            type="text"
            className="form-control"
            validations={[required]}
          />
        </div>
        <div className="form-group col-12">
          <label>{t('Mật khẩu')}</label>
          <div className="input-password">
            <div className="wapper-password">
              <Input
                onChange={e => this._onChange(e, 'password')}
                value={this.state.params.password}
                name="password"
                type={this.state.toggle.password ? 'password' : 'text'}
                className="form-control"
                validations={[required]}
              />
              <i
                onClick={() => this._onToggle('password')}
                className={this.state.toggle.password ? 'fa fa-eye-slash' : 'fa fa-eye'}
              />
            </div>
          </div>
          <small className="form-text text-muted">
            ({t('Mật khẩu là mật khẩu giao dịch tại MBS')})
          </small>
        </div>
        <div className="col-10 wapper-link">
          <Button
            type="button"
            onClick={() => this._onClick()}
            className="btn btn-primary rounded-pill border-0 btn-lg btn-block mr-1"
          >
            {t('LIÊN KẾT TÀI KHOẢN')}
          </Button>
        </div>
      </Form>
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
