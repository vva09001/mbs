import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormatTime } from 'utils/moment';
import Layout from 'container/layout/layout';
import { currency } from 'utils/currency';
import tradeActions from 'store/trade/actions';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'cancel',
      date: new Date(),
      params: {}
    };
  }
  componentDidMount() {
    this.setState({
      type: this.props.match.params.type
    });
  }
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      params: {
        sellDate: value
      }
    });
  };
  _sellDate = () => {
    return (
      <select className="form-control" onChange={this._onChange.bind(this)}>
        {_.map(this.props.sellDate, (item, index) => {
          return (
            <option key={index} value={item.termDate}>
              {item.termDate}
            </option>
          );
        })}
      </select>
    );
  };
  _onClick = () => {
    if (this.state.type === 'edit') {
      this.props.change(this.state.params);
    } else {
      this.props.delete();
    }
  };
  render() {
    const { detail } = this.props;
    return (
      <Layout type={2} title={this.state.type === 'edit' ? 'Sửa giao dịch bán' : 'Bán Trái phiếu'}>
        <div className="bond-detail">
          <div className="section">
            <div className="row">
              <div className="col-12">
                <h3>{detail.bondCode}</h3>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">I. Thông tin Trái phiếu sở hữu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch:</label>
              <div className="col-6">{detail.buyDate}</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đáo hạn TP:</label>
              <div className="col-6">{detail.maturityDate}</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng Trái phiếu sở hữu:</label>
              <div className="col-6">{currency(detail.buyVol)} Trái phiếu</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá mua:</label>
              <div className="col-6">{currency(detail.buyPrice)} VNĐ</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Giá trị đầu tư:</label>
              <div className="col-6">{currency(detail.buyValue)} VNĐ</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">II. Đề nghị giao dịch bán Trái phiếu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đề nghị bán:</label>
              <div className="col-6">{FormatTime(this.state.date)}</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch bán:</label>
              <div className="col-6">
                {this.state.type === 'edit' ? this._sellDate() : detail.sellDate}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá bán:</label>
              <div className="col-6">
                <strong>{currency(detail.sellPrice)} VNĐ</strong>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng Trái phiếu:</label>
              <div className="col-6">{currency(detail.sellVol)} Trái phiếu</div>
            </div>
            <div className="form-group sum-field row">
              <label className="col-6 col-form-label">Tổng giá trị bán</label>
              <label className="col-6 col-form-label">{currency(detail.sellValue)} VNĐ</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">
                <i>Tỷ lệ thuế TNCN (%)</i>
              </label>
              <div className="col-6">
                <i>{currency(detail.taxPit)}%</i>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">
                <i>Giá trị thuế TNCN</i>
              </label>
              <div className="col-6">
                <i>{currency(detail.taxValue)} VNĐ</i>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-9">
                <button
                  type="button"
                  onClick={() => this._onClick()}
                  className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
                >
                  {this.state.type === 'edit' ? 'SỬA BÁN' : 'HUỶ BÁN'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Actions.propTypes = {
  match: PropTypes.object,
  detail: PropTypes.object,
  sellDate: PropTypes.array,
  change: PropTypes.func,
  delete: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    detail: state.Trade.detail,
    sellDate: state.Trade.date
  };
};

const mapDispatchToProps = {
  change: tradeActions.change,
  delete: tradeActions.delete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions);
