import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from 'utils/history';
import RootContainer from 'container/rootContainer';
import HomePage from 'container/homepage';

import BuyList from 'container/buy/list';
import BuyDetail from 'container/buy/detail';
import BuyOrder from 'container/buy/order';
import BuyTerm from 'container/buy/term';
import BuyFlow from 'container/buy/flow';
import BuyConfirm from 'container/buy/confirm';
import BuyVerify from 'container/buy/verify';
import BuyCancel from 'container/buy/cancel';
import BuyInfo from 'container/buy/info';

import SellOrder from 'container/sell/order';
import SellTerm from 'container/sell/term';
import SellConfirm from 'container/sell/confirm';
import SellList from 'container/sell/list';

import TradeList from 'container/trade/list';
import TradeActions from 'container/trade/actions';

import AccountList from 'container/account/list';
import AccountConnect from 'container/account/connect';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/buy/" component={BuyList} />
          <Route path="/buy/info/" component={BuyInfo} />
          <Route path="/buy/order/" component={BuyOrder} />
          <Route path="/buy/term/" component={BuyTerm} />
          <Route path="/buy/flow/" component={BuyFlow} />
          <Route path="/buy/confirm/" component={BuyConfirm} />
          <Route path="/buy/verify/" component={BuyVerify} />
          <Route path="/buy/cancel/" component={BuyCancel} />
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
