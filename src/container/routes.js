import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import HomePage from './homepage';

import BuyList from './buy/list';
import BuyDetail from './buy/detail';
import BuyOrder from './buy/order';
import BuyTerm from './buy/term';
import BuyFlow from './buy/flow';
import BuyConfirm from './buy/confirm';
import BuyVerify from './buy/verify';
import BuyInfo from './buy/info';

import SellOrder from './sell/order';
import SellTerm from './sell/term';
import SellConfirm from './sell/confirm';
import SellList from './sell/list';

import TradeList from './trade/list';
import TradeActions from './trade/actions';

import AccountList from './account/list';
import AccountConnect from './account/connect';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route path="/:merchant_code/:msisdn/:time" component={HomePage} />
          <Route exact path="/" component={HomePage} />

          <Route exact path="/buy/" component={BuyList} />
          <Route path="/buy/info/" component={BuyInfo} />
          <Route path="/buy/order/" component={BuyOrder} />
          <Route path="/buy/term/" component={BuyTerm} />
          <Route path="/buy/flow/" component={BuyFlow} />
          <Route path="/buy/confirm/" component={BuyConfirm} />
          <Route path="/buy/verify/" component={BuyVerify} />
          <Route exact path="/buy/:code" component={BuyDetail} />

          <Route exact path="/sell/" component={SellList} />
          <Route path="/sell/confirm/" component={SellConfirm} />
          <Route path="/sell/term/" component={SellTerm} />
          <Route path="/sell/order/" component={SellOrder} />

          <Route exact path="/trade/" component={TradeList} />
          <Route exact path="/trade/:type" component={TradeActions} />

          <Route exact path="/user/" component={AccountList} />
          <Route path="/user/connect" component={AccountConnect} />
        </Switch>
      </RootContainer>
    </Router>
  );
};
AppRouter.propTypes = {
  auth: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    auth: state.Account.auth
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
