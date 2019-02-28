import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Social from '../../components/login/social';
import Footer from '../../components/signup/footer';
import Input from '../../components/common/input';
import userActions from '../../store/user/actions';

class SigupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    const state = this.state.params;
    if (state.password === state.passwordRepeat) {
      const params = {
        email: state.email,
        password: state.password
      };
      this.props.register(params);
    } else {
      toast.error('Password does not match.');
    }
  }
  _handleInput(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prev => ({
      params: {
        ...prev.params,
        [name]: value
      }
    }));
  }
  render() {
    return (
      <section id="formLogin">
        <div className="row">
          <div className="col-sm-4 bgLogin">
            <img src="img/bg-register.jpg" alt="" />
          </div>
          <div className="col-sm-8">
            <div className="container">
              <div className="row">
                <form onSubmit={this._handleSubmit.bind(this)} className="card-login">
                  <div className="form-close">
                    <a href="#">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <h2>Sign in to Montex</h2>
                  <Input
                    title="Email"
                    type="text"
                    name="email"
                    onChange={this._handleInput.bind(this)}
                  />
                  <Input
                    title="Password"
                    type="password"
                    name="password"
                    onChange={this._handleInput.bind(this)}
                  />
                  <Input
                    title="Password Again"
                    type="password"
                    name="passwordRepeat"
                    onChange={this._handleInput.bind(this)}
                  />

                  <div className="custom-control custom-checkbox mt-20">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      I confirm that i am at least 18 years old, and accept the Tearms & Conditions.
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mt-20">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">
                      I agree to receive bonus & marketing emails
                    </label>
                  </div>

                  <div className="group-input">
                    <button type="submit">Sign up</button>
                  </div>
                  <div className="clearfix" />
                  <Social />
                  <Footer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SigupContainer.propTypes = {
  register: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  register: userActions.register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigupContainer);
