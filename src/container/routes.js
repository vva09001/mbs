import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import HomePage from './homepage';

import BondsList from './bonds/list';

import BondsBuyList from './buy/list';
import BondsBuyDetail from './buy/detail';
import BondsBuyOrder from './buy/order';
import BondsBuyTerm from './buy/term';
import BondsBuyFlow from './buy/flow';
import BondsBuyConfirm from './buy/confirm';
import BondsBuyInfo from './buy/info';

import BondsSaleOrder from './sale/order';
import BondsSaleConfirm from './sale/confirm';
import BondsSaleList from './sale/list';
import BondsSaleActions from './trade/actions';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buy/" component={BondsBuyList} />
          <Route exact path="/buy/info" component={BondsBuyInfo} />
          <Route exact path="/buy/order" component={BondsBuyOrder} />
          <Route exact path="/buy/term" component={BondsBuyTerm} />
          <Route exact path="/buy/flow" component={BondsBuyFlow} />
          <Route exact path="/buy/confirm" component={BondsBuyConfirm} />
          <Route exact path="/buy/:code" component={BondsBuyDetail} />

          <Route exact path="/sell/" component={BondsSaleList} />
          <Route exact path="/sell/order" component={BondsSaleOrder} />
          <Route exact path="/sell/confirm" component={BondsSaleConfirm} />
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
