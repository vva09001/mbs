import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import HomePage from './homepage';
import BondsList from './bonds/list';

import BondsDetail from './bonds/detail';

import BondsBuyOrder from './bonds/buy/order';
import BondsBuyConfirm from './bonds/buy/confirm';

import BondsSaleOrder from './bonds/sale/order';
import BondsSaleConfirm from './bonds/sale/confirm';
import BondsSaleList from './bonds/sale/list';
import BondsSaleActions from './bonds/trade/actions';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/bonds" component={BondsList} />
          <Route exact path="/bonds/:code" component={BondsDetail} />
          <Route exact path="/bonds/buy/order" component={BondsBuyOrder} />
          <Route exact path="/bonds/buy/confirm" component={BondsBuyConfirm} />
          <Route exact path="/bonds/sale/order" component={BondsSaleOrder} />
          <Route exact path="/bonds/sale/confirm" component={BondsSaleConfirm} />
          <Route exact path="/bonds/sale/list" component={BondsSaleList} />
          <Route exact path="/bonds/sale/actions/:type" component={BondsSaleActions} />
        </Switch>
      </RootContainer>
    </Router>
  );
};
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool
};
const mapStateToProps = () => {
  return {
    // isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
