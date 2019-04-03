import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormatTime } from '../../utils/moment';
import Loading from '../common/loading';

export default class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  handleMount(type) {
    if (type) {
      this.props.handleParam('params', {
        ...this.props.params,
        amount: this.props.params.amount + 1,
        sum: this.props.item.buyPrice * (this.props.params.amount + 1)
      });
    } else {
      if (this.props.params.amount > 0) {
        this.props.handleParam('params', {
          ...this.props.params,
          amount: this.props.params.amount - 1,
          sum: this.props.item.buyPrice * (this.props.params.amount - 1)
        });
      }
    }
  }
  _onChangeAmount(event) {
    const number = parseInt(event.target.value);
    this.props.handleParam('params', {
      ...this.props.params,
      amount: number,
      sum: number * this.props.item.buyPrice
    });
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="section-2">
        <div className="form-group row">
          <label className="col-6 col-form-label">Ngày giao dịch</label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary date-field"
                disabled
                value={FormatTime(this.state.date)}
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">Giá đơn mua</label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary"
                disabled
                value={this.props.item.buyPrice}
              />
              <div className="input-group-append">
                <div className="input-group-text text-primary">VND</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">Số lượng TP mua</label>
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
            <strong>GIÁ TRỊ ĐẦU TƯ</strong>
          </label>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-primary"
                disabled
                value={this.props.params.sum}
              />
              <div className="input-group-append">
                <div className="input-group-text text-primary">VND</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Section2.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  params: PropTypes.object,
  handleParam: PropTypes.func
};
