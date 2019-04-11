import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FormatTime } from '../../utils/moment';
import Loading from '../common/loading';
import { currency } from '../../utils/currency';

class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.params.amount = this.props.info.buyVolMin;
  }
  handleMount(type) {
    if (type) {
      if (this.props.params.amount <= this.props.bond.roomBalance) {
        this.props.handleParam('params', {
          ...this.props.params,
          amount: this.props.params.amount + 1,
          sum: this.props.info.buyPrice * (this.props.params.amount + 1)
        });
      }
    } else {
      if (this.props.params.amount > this.props.info.buyVolMin) {
        this.props.handleParam('params', {
          ...this.props.params,
          amount: this.props.params.amount - 1,
          sum: this.props.info.buyPrice * (this.props.params.amount - 1)
        });
      }
    }
  }
  _onChangeAmount(event) {
    const number = parseInt(event.target.value);
    if (number <= this.props.info.roomBalance && number > this.props.info.buyVolMin) {
      this.props.handleParam('params', {
        ...this.props.params,
        amount: number,
        sum: number * this.props.info.buyPrice
      });
    }
    if (isNaN(number)) {
      this.props.handleParam('params', {
        ...this.props.params,
        amount: 0,
        sum: 0 * this.props.info.buyPrice
      });
    }
  }
  render() {
    const { t } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="section-2">
        <div className="form-group row">
          <label className="col-6 col-form-label">{t('Ngày giao dịch')}</label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary date-field"
                disabled
                value={this.props.info.buyDate}
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">{t('Giá đơn mua')}</label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary"
                disabled
                value={currency(this.props.info.buyPrice)}
              />
              <div className="input-group-append">
                <div className="input-group-text text-primary">{t('VND')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">{t('Số lượng TP mua')}</label>
          <div className="col-6">
            <div className="input-group number-field">
              <a className="btn btn-light text-primary" onClick={() => this.handleMount(false)}>
                -
              </a>
              <input
                className="number form-control text-primary"
                value={this.props.params.amount}
                onChange={this._onChangeAmount.bind(this)}
              />
              <a className="btn btn-light text-primary" onClick={() => this.handleMount(true)}>
                +
              </a>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label text-primary">
            <strong>{t('GIÁ TRỊ ĐẦU TƯ')}</strong>
          </label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary"
                disabled
                value={this.props.params.amount * this.props.info.buyPrice}
              />
              <div className="input-group-append">
                <div className="input-group-text text-primary">{t('VND')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Section2.propTypes = {
  info: PropTypes.object,
  bond: PropTypes.object,
  loading: PropTypes.bool,
  params: PropTypes.object,
  handleParam: PropTypes.func,
  t: PropTypes.func
};

export default withTranslation()(Section2);
