import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import Layout from '../layout/layout';
import Popup from '../../components/common/popup';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        popup: false
      },
      startDate: new Date()
    };
  }
  showPopup() {
    this.setState({
      toggle: {
        popup: !this.state.toggle.popup
      }
    });
  }
  componentDidMount() {}
  render() {
    return (
      <Layout title="Chi Tiết Sản phẩm">
        <div className="white-bg bond-detail">
          {this.state.toggle.popup && (
            <Popup title="Thông tin trái phiếu">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Popup>
          )}
          <div className="row section">
            <div className="col-12">
              <h3>
                NVL1235860 <img src="/img/popup-icon.png" />
              </h3>
              <div className="row">
                <div className="col-6">
                  <h4>Ngày đáo hạn</h4>
                  <h5>24/10/2019</h5>
                </div>
                <div className="col-6 text-right">
                  <h4>Hạn mức</h4>
                  <h5>
                    <span>23.659</span> trái phiếu
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="section-2">
              <div className="form-group row">
                <label className="col-6 col-form-label">Ngày giao dịch</label>
                <div className="col-6">
                  <DatePicker selected={this.state.startDate}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Giá đơn mua</label>
                <div className="col-6">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <div className="input-group-text">VND</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Số lượng TP mua</label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group sum-field row">
                <label className="col-6 col-form-label">GIÁ TRỊ ĐẦU TƯ</label>
                <div className="col-6">
                  <div className="input-group">
                    <input type="text" className="form-control" disabled value="510,760,000" />
                    <div className="input-group-append">
                      <div className="input-group-text">VND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                Lãi suất đáo hạn
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="8%"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Thời gian nắm giữ</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="365 7.2% / năm"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Lãi suất đầu tư</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
          </form>
          <h3>TỔNG TIỀN NHẬN ĐƯỢC (DỰ KIẾN)</h3>
          <div className="row">
            <div className="col-sm-2">Chưa bao gồm tái đầu tư coupon:</div>
            <div className="col-sm-10">217,377,499VNĐ</div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Ngày thanh toán</th>
                    <th scope="col">Tiền nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coupon</td>
                    <td>02/04/2019</td>
                    <td>8,600,0000</td>
                  </tr>
                  <tr>
                    <td>Coupon</td>
                    <td>02/04/2019</td>
                    <td>8,600,0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">Đã bao gồm tái đầu tư coupon:</div>
            <div className="col-sm-10">217,377,499VNĐ</div>
          </div>
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Ngày thanh toán</th>
                    <th scope="col">Tiền nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coupon</td>
                    <td>02/04/2019</td>
                    <td>8,600,0000</td>
                  </tr>
                  <tr>
                    <td>Coupon</td>
                    <td>02/04/2019</td>
                    <td>8,600,0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Đặt lệnh mua
          </button>
        </div>
      </Layout>
    );
  }
}

Detail.propTypes = {
  bonds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.detail
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
