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
import NumberFormat from 'react-number-format';
import Loading from 'components/common/loading';
const regex = /^[a-zA-Z0-9 ]+$/;

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAccount: false,
      params: {
        accountBankCode: '',
        money: '',
        des: ''
      },
      validate: true,
      checkDes: true
    };
  }

  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query.merchant_code) {
      this.props.checkAuth(query);
    }
  }
  _onChangeInputMoney = e => {
    let nextValue = parseInt(e.target.value);
    if (!nextValue) {
      nextValue = '';
    }
    this.setState({
      params: {
        ...this.state.params,
        money: nextValue
      }
    });
  };
  _onChangeInputAccount = e => {
    this.setState({
      params: {
        ...this.state.params,
        accountBankCode: e.target.value
      },
      checkAccount: false
    });
  };
  _onChangeInputDes = e => {
    this.setState({
      params: {
        ...this.state.params,
        des: e.target.value
      },
      checkDes: true
    });
  };
  _onChange = (e, param) => {
    const value = e.target.value;
    let nextValue = '';
    if (e.target.name === 'money') {
      nextValue = parseInt(value);
      if (!nextValue) {
        nextValue = '';
      }
    } else {
      nextValue = value;
    }
    this.setState({
      params: {
        ...this.state.params,
        [param]: nextValue
      }
    });
  };
  _onClick = () => {
    if (this.validateForm()) {
      this.props.transferMoney(
        this.state.params.accountBankCode,
        encodeURI(this.props.infoAccount.accountName),
        this.state.params.money,
        this.state.params.des
      );
    }
  };
  _onCheckAccountCode = accountCode => {
    if (accountCode !== '') {
      this.props.checkAccCountCode(accountCode);
      this.setState({
        checkAccount: true
      });
    }
  };
  validateForm = () => {
    const params = this.state.params;
    let check = true;
    if (
      params.accountBankCode !== '' &&
      this.props.infoAccount.accountName &&
      params.money !== '' &&
      params.money >= 50000 &&
      params.money <= 100000000 &&
      params.des !== ''
    ) {
      check = true;
    } else {
      check = false;
    }
    let checkDes = true;
    if (params.des !== '') {
      checkDes = regex.test(params.des);
      check = check && checkDes;
    }
    this.setState({
      validate: check,
      checkDes: checkDes
    });
    return check;
  };

  render() {
    const { t } = this.props;
    const { params, checkAccount, validate, checkDes } = this.state;
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
            </div>
            <div className="form-group col-12 form-group-transfer">
              <input
                onChange={this._onChangeInputAccount}
                value={params.accountBankCode}
                name="accountBankCode"
                type="text"
                className="form-control input-transfer"
                onBlur={() => this._onCheckAccountCode(params.accountBankCode)}
                placeholder={t('TKCK')}
              />
              {params.accountBankCode ? (
                this.props.loading ? (
                  <Loading />
                ) : this.props.infoAccount.accountName && checkAccount ? (
                  <div className="form-text text-secondary">
                    ({`${t('account_name')}:${this.props.infoAccount.accountName}`})
                  </div>
                ) : checkAccount ? (
                  <div className="form-text text-danger">({t('account_no_exist')})</div>
                ) : null
              ) : null}
              {!validate && params.accountBankCode === '' && (
                <div className="form-text text-danger">{t('validate_account_transfer')}</div>
              )}
            </div>
            <div className="form-group col-12 form-group-transfer">
              <NumberFormat value={params.money} displayType={'text'} thousandSeparator={true} />
              <Input
                onChange={e => this._onChange(e, 'money')}
                value={params.money}
                name="money"
                autoComplete="off"
                className="form-control input-transfer white-text"
                placeholder={t('money_transfer')}
              />
              {!validate &&
                (params.money === '' || params.money < 50000 || params.money > 100000000) && (
                  <div className="form-text text-danger">{t('validate_money_transfer')}</div>
                )}
            </div>
            <div className="form-group col-12 form-group-transfer">
              <Input
                onChange={this._onChangeInputDes}
                value={params.des}
                name="des"
                type="text"
                lang="en"
                pattern="[A-Za-z0-9]"
                className="form-control input-transfer"
                placeholder={t('des_transfer')}
              />
              {!validate && (params.des === '' || !checkDes) && (
                <div className="form-text text-danger">{t('validate_content_transfer')}</div>
              )}
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
  loading: PropTypes.bool,
  checkAuth: PropTypes.func,
  checkAccCountCode: PropTypes.func,
  transferMoney: PropTypes.func,
  infoAccount: PropTypes.object,
  location: PropTypes.object,
  t: PropTypes.func
};
Transfer.defaultProps = {
  infoAccount: {},
  location: {}
};

const mapStateToProps = state => {
  return {
    infoAccount: state.Account.infoAccount,
    loading: state.Account.loading
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
    transferMoney: (accountCode, accountName, money, des) => {
      dispatch(accountActions.transferMoney(accountCode, accountName, money, des));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Transfer));
