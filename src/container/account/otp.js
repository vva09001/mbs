import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import accountActions from 'store/account/actions';

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
    return (
      <form className="row justify-content-center">
        <div className="form-group col-12">
          <label>Mã OTP</label>
          <input
            onChange={e => this._onChange(e, 'otp')}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="col-9">
          <button
            type="button"
            onClick={() => this._onClick()}
            className="btn btn-primary bg-gradient-primary rounded-pill border-0 btn-lg btn-block mr-1"
          >
            XÁC NHẬN
          </button>
        </div>
      </form>
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
)(Otp);
