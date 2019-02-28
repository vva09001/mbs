import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Social from '../../components/login/social';
import Footer from '../../components/login/footer';
import Input from '../../components/common/input';
import userActions from '../../store/user/actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.params);
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
            <img src="img/bg-login.jpg" alt="" />
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
                    title="Email Address"
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
                  <div className="float-right">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="clearfix" />
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Check this custom checkbox
                    </label>
                  </div>
                  <div className="group-input">
                    <div className="control-input">
                      <input type="text" value="" placeholder="Google Authenticator code:" />
                      <i className="fas fa-code" />
                    </div>
                  </div>
                  <div className="group-input">
                    <button type="submit">Sign in</button>
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

LoginContainer.propTypes = {
  login: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  login: userActions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
