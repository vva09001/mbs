import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import { currency } from '../../utils/currency';
import Layout from '../layout/layout';
import sellActions from '../../store/sell/actions';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        checkbox: false
      },
      params: {}
    };
  }

  componentDidMount() {
    this.setState({
      params: {
        ...this.state.params,
        date: this.props.sellDate[0].termDate,
        contractCode: this.props.info.contractCode
      }
    });
  }
  _onCheckBox = () => {
    this.setState({
      toggle: {
        checkbox: !this.state.toggle.checkbox
      }
    });
  };
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      params: {
        ...this.state.params,
        sellDate: value
      }
    });
  };
  _onBook = () => {
    this.props.book(this.state.params);
  };
  render() {
    const { info, sellDate, t } = this.props;
    return (
      <Layout type={2} title="ĐĂNG KÝ BÁN">
        <div className="bond-detail">
          <div className="section">
            <div className="row">
              <div className="col-12">
                <h3>{info.bondCode}</h3>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">I. Thông tin Trái phiếu sở hữu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch:</label>
              <div className="col-6">{info.buyDate}</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đáo hạn TP:</label>
              <div className="col-6">{info.maturityDate}</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng TP sở hữu:</label>
              <div className="col-6">
                {currency(info.buyVol)} {t('TP')}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá mua:</label>
              <div className="col-6">{currency(info.buyPrice)} VND</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Giá trị đầu tư:</label>
              <div className="col-6">{currency(info.buyValue)} VND</div>
            </div>
          </div>
          <div className="pb-2">
            <div className="form-group sum-field row">
              <label className="col-12 col-form-label">II. Đề nghị giao dịch bán Trái phiếu</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày đề nghị bán:</label>
              <div className="col-6">Thứ sáu 03/11/2019</div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Ngày giao dịch bán:</label>
              <div className="col-6">
                <div className="form-group">
                  <select className="form-control" onChange={this._onChange.bind(this)}>
                    {_.map(sellDate, (item, index) => {
                      return (
                        <option key={index} value={item.termDate}>
                          {item.termDate}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Đơn giá bán:</label>
              <div className="col-6">
                <strong>{currency(info.sellPrice)} VND</strong>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">Số lượng TP:</label>
              <div className="col-6">{currency(info.sellVol)}</div>
            </div>
            <div className="form-group sum-field row">
              <label className="col-6 col-form-label">TỔNG GIÁ TRỊ BÁN</label>
              <label className="col-6 col-form-label">{currency(info.sellValue)} VND</label>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">
                <i>Tỷ lệ thuế TNCN (%)</i>
              </label>
              <div className="col-6">
                <i>{currency(info.taxPit)}</i>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-6 col-form-label">
                <i>Giá trị thuế TNCN</i>
              </label>
              <div className="col-6">
                <i>{currency(info.taxValue)} VND</i>
              </div>
            </div>
            <div className="term-condition">
              <Link to="/sell/term">{t('Điều khoản và điều kiện đăng ký bán')}</Link>
            </div>
            <label className="form-check-label">
              <strong>
                <i>
                  {t(
                    'Tôi xác nhận rằng tôi đã đọc và đống ý với các điều khoản và điều kiện của đăng ký'
                  )}
                  {t('Trái phiếu được nêu trên đây.')}
                </i>
              </strong>
              <input type="checkbox" onChange={() => this._onCheckBox()} />
              <span className="checkmark" />
            </label>
            <div className="row justify-content-center">
              <div className="col-9">
                <button
                  onClick={() => this._onBook()}
                  type="button"
                  className="btn btn-danger rounded-pill border-0 btn-lg btn-block"
                  disabled={!this.state.toggle.checkbox}
                >
                  ĐẶT LỆNH BÁN
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Order.propTypes = {
  info: PropTypes.object,
  bond: PropTypes.object,
  sellDate: PropTypes.array,
  book: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    info: state.Sell.info,
    sellDate: state.Sell.date
  };
};

const mapDispatchToProps = {
  getInfo: sellActions.getInfo,
  book: sellActions.book
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Order));
