import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import accountActions from 'store/account/actions';
import { required } from 'utils/validation';

class Otp extends Component {
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
    this.props.link(this.state.params);
  };
  render() {
    const { t } = this.props;
    return (
      <Form className="row justify-content-center">
        <div className="form-group col-12">
          <label>{t('Mã OTP')}</label>
          <Input
            onChange={e => this._onChange(e, 'otp')}
            type="text"
            className="form-control"
            validations={[required]}
          />
        </div>
        <div className="col-9">
          <Button
            type="button"
            onClick={() => this._onClick()}
            className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
          >
            {t('XÁC NHẬN')}
          </Button>
        </div>
      </Form>
    );
  }
}

Otp.propTypes = {
  link: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  link: accountActions.link
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Otp));
