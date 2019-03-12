import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import Popup from '../../components/common/popup';
import { Section1, Section2, Section3, Section4 } from '../../components/detail/section';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: {
        popup: false,
        table1: true,
        table2: false
      },
      startDate: new Date()
    };
  }
  showPopup = type => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [type]: !this.state.toggle[type]
      }
    });
  };
  componentDidMount() {}
  render() {
    return (
      <Layout title="Chi Tiết Sản phẩm">
        <div className="bond-detail">
          {this.state.toggle.popup && (
            <Popup title="Thông tin trái phiếu">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Popup>
          )}
          <Section1 />
          <form>
            <Section2 />
            <Section3 />
          </form>
          <div className="form-group sum-field row">
            <label className="col-12 col-form-label">TỔNG TIỀN NHẬN ĐƯỢC (DỰ KIẾN)</label>
          </div>
          <Section4
            title="Chưa bao gồm tái đầu tư coupon:"
            status={this.state.toggle.table1}
            refs="table1"
            onClick={this.showPopup}
          />
          <Section4
            title="Đã bao gồm tái đầu tư coupon:"
            status={this.state.toggle.table2}
            refs="table2"
            onClick={this.showPopup}
          />
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
