import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Loading from 'components/common/loading';
import { currency } from 'utils/currency';

class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }
  componentDidUpdate() {}
  handleMount(type) {
    if (type) {
      if (this.props.params.volume < this.props.volMax) {
        this.props.handleParam({
          ...this.props.params,
          volume: this.props.params.volume + 1,
          sum: this.props.price * (this.props.params.volume + 1)
        });
        this.props.onFetch({
          code: this.props.code,
          volume: this.props.params.volume + 1
        });
      }
    } else {
      if (this.props.params.volume > this.props.volMin) {
        this.props.handleParam({
          ...this.props.params,
          volume: this.props.params.volume - 1,
          sum: this.props.price * (this.props.params.volume - 1)
        });
        this.props.onFetch({
          code: this.props.code,
          volume: this.props.params.volume - 1
        });
      }
    }
  }
  _onChangeAmount = event => {
    const number = parseInt(event.target.value);
    if (number <= this.props.volMax && number >= this.props.volMin) {
      this.props.handleParam({
        ...this.props.params,
        volume: number,
        sum: number * this.props.price
      });
      this.props.onFetch({
        code: this.props.code,
        volume: number
      });
    }
    if (isNaN(number)) {
      this.props.handleParam({
        ...this.props.params,
        volume: this.props.volMin,
        sum: this.props.volMin * this.props.price
      });
      this.props.onFetch({
        code: this.props.code,
        volume: this.props.volMin
      });
    }
  };
  render() {
    const { t } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="section-2">
        <div className="form-group row">
          <label className="col-5 col-form-label npdr">{t('Ngày giao dịch')}</label>
          <div className="col-7">
            <div className="tar">{this.props.date}</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-5 col-form-label npdr">{t('Số lượng TP mua')}</label>
          <div className="col-7 no-pading-right">
            <div className="input-group number-field">
              <span
                className="btn btn-light xmbs popup-click"
                onClick={() => this.handleMount(false)}
              >
                -
              </span>
              <input
                className="number form-control bgmb"
                value={this.props.params.volume}
                onChange={e => this._onChangeAmount(e)}
              />
              <span
                className="btn btn-light xmbs popup-click"
                onClick={() => this.handleMount(true)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-5 col-form-label">{t('Giá đơn mua')}</label>
          <div className="col-7">
            <div className="input-group tar">
              <span>{currency(this.props.price)} {t('VNĐ')}</span>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-5 col-form-label clb npdr">
            <strong>{t('GIÁ TRỊ ĐẦU TƯ')}</strong>
          </label>
          <div className="col-7">
            <div className="input-group">
              <span className="form-control text-primary">
                <b className="clb">{currency(this.props.params.volume * this.props.price)}</b>
              </span>
              <div className="flex-shrink-1 input-group-append">
                <div className="input-group-text clb">{t('VNĐ')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Section2.propTypes = {
  date: PropTypes.string,
  code: PropTypes.string,
  volMax: PropTypes.number,
  volMin: PropTypes.number,
  price: PropTypes.number,
  loading: PropTypes.bool,
  params: PropTypes.object,
  handleParam: PropTypes.func,
  onFetch: PropTypes.func,
  t: PropTypes.func
};

export default withTranslation()(Section2);
