import React, { Fragment } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import HomePage from './homepage';
import CoinDetail from './coin-detail';
import Login from './users/login';
import Signup from './users/signup';

const AppRouter = props => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/coin-detail/:id" component={CoinDetail} />
          {props.isLoggedIn ? (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          ) : (
            <Fragment>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Fragment>
          )}
        </Switch>
      </RootContainer>
    </Router>
  );
};
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
