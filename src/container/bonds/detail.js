import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import history from '../../utils/history';
import bondsActions from '../../store/bonds/actions';
import Popup from '../../components/common/popup';
import Loading from '../../components/common/loading';
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
  componentDidMount() {
    this.props.bondsDetail({
      userId: 1212,
      channel: 'VT',
      code: this.props.match.params.code
    });
  }
  showPopup = type => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [type]: !this.state.toggle[type]
      }
    });
  };

  render() {
    return (
      <Layout type={1} title="Chi Tiết Sản phẩm">
        {this.state.toggle.popup && (
          <Popup title="Thông tin trái phiếu">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </Popup>
        )}
        {this.props.loading ? (
          <Loading />
        ) : (
          <div className="bond-detail">
            <Section1 item={this.props.bond} />
            <form>
              <Section2 />
              <Section3 item={this.props.bond} />
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
            <button
              type="button"
              onClick={() => console.log(this.props.bond)}
              className="btn btn-primary btn-lg btn-block"
            >
              Đặt lệnh mua
            </button>
          </div>
        )}
      </Layout>
    );
  }
}

Detail.propTypes = {
  bond: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bond: state.Bonds.detail,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
