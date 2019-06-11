import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { accountActions, authActions } from 'store/actions';
import qs from 'query-string';
import Layout from 'container/layout/layout-noAuth';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { required } from 'utils/validation';

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCode: false,
      params: {
        accountBankCode: '',
        money: '',
        des: ''
      }
    };
  }

  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.merchant_code) {
      this.props.checkAuth(query);
    }
  }
  _onChange = (e, param) => {
    const value = e.target.value;
    this.setState({
      checkCode: false,
      params: {
        ...this.state.params,
        [param]: value
      }
    });
  };
  _onClick = () => {
    this.props.transferMoney(
      this.state.params.accountBankCode,
      this.state.params.money,
      this.state.params.des
    );
  };

  _onCheckAccountCode = accountCode => {
    if (accountCode !== '') {
      this.props.checkAccCountCode(accountCode);
      this.setState({
        checkCode: true
      });
    }
  };

  render() {
    const { t } = this.props;
    const { params, checkCode } = this.state;
    return (
      <Layout type={1} title={t('request_transfer')}>
        <div className="bond-detail pt-3 max-hieght">
          <Form
            ref={c => {
              this.form = c;
            }}
            className="row justify-content-center"
          >
            <div className="form-group col-12">
              <label className="mbs-title">{t('transfer_to')}</label>
              {/* <div className="d-flex">
                <img className="h30" src="/img/logo.png" alt="logoMBS"/>
                <label className="mbs-name">{t('mbs_name')}</label>  
              </div> */}
            </div>
            <div className="form-group col-12 form-group-transfer">
              {/* <label>{t('TKCK')}</label> */}
              <input
                onChange={e => this._onChange(e, 'accountBankCode')}
                value={params.accountBankCode}
                name="accountBankCode"
                type="text"
                className="form-control input-transfer"
                onBlur={() => this._onCheckAccountCode(params.accountBankCode)}
                placeholder={t('TKCK')}
              />
              {params.accountBankCode && checkCode ? (
                this.props.infoAccount.accountName && checkCode ? (
                  <span className="form-text text-secondary">
                    ({`${t('account_name')}:${this.props.infoAccount.accountName}`})
                  </span>
                ) : (
                  <span className="form-text text-danger">({t('account_no_exist')})</span>
                )
              ) : null}
            </div>
            <div className="form-group col-12 form-group-transfer">
              {/* <label>{t('money_transfer')}</label> */}
              <Input
                onChange={e => this._onChange(e, 'money')}
                value={params.money}
                name="money"
                type="text"
                className="form-control input-transfer"
                validations={[required]}
                placeholder={t('money_transfer')}
              />
            </div>
            <div className="form-group col-12 form-group-transfer">
              {/* <label>{t('des_transfer')}</label> */}
              <Input
                onChange={e => this._onChange(e, 'des')}
                value={params.des}
                name="des"
                type="text"
                className="form-control input-transfer"
                validations={[required]}
                placeholder={t('des_transfer')}
              />
            </div>
            <div className="col-10 wapper-link">
              <Button
                type="button"
                onClick={() => this._onClick()}
                className="btn btn-primary rounded-pill border-0 btn-lg btn-block mr-1"
              >
                {t('make_transaction')}
              </Button>
            </div>
          </Form>
        </div>
      </Layout>
    );
  }
}

Transfer.propTypes = {
  checkAuth: PropTypes.func,
  checkAccCountCode: PropTypes.func,
  transferMoney: PropTypes.func,
  infoAccount: PropTypes.object,
  location: PropTypes.object,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    infoAccount: state.Account.infoAccount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: params => {
      dispatch(authActions.auth(params));
    },
    checkAccCountCode: accountCode => {
      dispatch(accountActions.checkAccountCode(accountCode));
    },
    transferMoney: (accountCode, money, des) => {
      dispatch(accountActions.transferMoney(accountCode, money, des));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Transfer));
