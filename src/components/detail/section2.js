import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import _ from 'lodash';
import Loading from '../common/loading';

export default class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: this.props.params.sum,
    };
  }
  handleMount(type){
    this.setState({
      sum: this.props.item.buyPrice * this.props.params.amount
    }, () => {
      if(type){
        this.props.handleParam('params', {
          ...this.props.params,
          amount: this.props.params.amount + 1,
          sum: this.state.sum
        })
      } else {
        this.props.handleParam('params', {
          ...this.props.params,
          amount: this.props.params.amount - 1,
          sum: this.state.sum
        })
      }
    })

  }
  render() {
    if(this.props.loading){
      return (
        <Loading />
      )
    }
    return (
      <div className="section-2">
        <div className="form-group row">
          <label className="col-6 col-form-label">Ngày giao dịch</label>
          <div className="col-6">
            <DatePicker value={this.props.params.data} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">Giá đơn mua</label>
          <div className="col-6">
            <div className="input-group">
              <input type="text" className="form-control" disabled value={this.props.item.buyPrice}/>
              <div className="input-group-append">
                <div className="input-group-text">VND</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-6 col-form-label">Số lượng TP mua</label>
          <div className="col-sm-6">
            <div className="input-group number-field">
              <a className="btn btn-light" onClick={() => this.handleMount(false)}>-</a>
              <input type="number" className="form-control" value={this.props.params.amount}/>
              <a className="btn btn-light" onClick={() => this.handleMount(true)}>+</a>
            </div>
          </div>
        </div>
        <div className="form-group sum-field row">
          <label className="col-6 col-form-label">GIÁ TRỊ ĐẦU TƯ</label>
          <div className="col-6">
            <div className="input-group">
              <input type="text" className="form-control" disabled value={this.props.params.sum} />
              <div className="input-group-append">
                <div className="input-group-text">VND</div>
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
  loading: PropTypes.bool
};
