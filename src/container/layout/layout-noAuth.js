import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Popup from 'components/common/popup';
import Footer from 'components/common/footer';
// actions
import buyActions from 'store/buy/actions';
import sellActions from 'store/sell/actions';
import bondsActions from 'store/bonds/actions';
import authActions from 'store/bonds/actions';
import tradeActions from 'store/trade/actions';
import accountActions from 'store/account/actions';

// components: First
const header = props => {
  switch (props.type) {
    case 1:
      return <Header1 title={props.title} />;
    case 2:
      return <Header2 title={props.title} />;
    case 3:
      return <Header3 title={props.title} />;
    default:
      return <Header title={props.title} />;
  }
};

header.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string
};
const Alert = (message, toggle) => (
  <Popup showPopup={() => toggle()}>
    <p>{message}</p>
  </Popup>
);
const Layout = props => {
  return (
    <Fragment>
      {props.buyError.status && Alert(props.buyError.message, props.buyClear)}
      {props.sellError.status && Alert(props.sellError.message, props.sellClear)}
      {props.authError.status && Alert(props.authError.message, props.authClear)}
      {props.tradeError.status && Alert(props.tradeError.message, props.tradeClear)}
      {props.accountError.status && Alert(props.accountError.message, props.accountClear)}
      {header(props)}
      <div className="container-fluid vh-100 overflow-hidden">{props.children}</div>z
      <Footer active={props.active} />
    </Fragment>
  );
};

Layout.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  active: PropTypes.string,
  children: PropTypes.node,
  buyError: PropTypes.object,
  buyClear: PropTypes.func,
  sellError: PropTypes.object,
  sellClear: PropTypes.func,
  tradeError: PropTypes.object,
  tradeClear: PropTypes.func,
  authError: PropTypes.object,
  authClear: PropTypes.func,
  accountError: PropTypes.object,
  accountClear: PropTypes.func,
  bondsError: PropTypes.object
};

const mapStateToProps = state => {
  return {
    buyError: state.Buy.error,
    sellError: state.Sell.error,
    bondsError: state.Bonds.error,
    authError: state.Bonds.error,
    tradeError: state.Trade.error,
    accountError: state.Account.error
  };
};

const mapDispatchToProps = {
  buyClear: buyActions.clearError,
  sellClear: sellActions.clearError,
  bondsClear: bondsActions.clearError,
  authClear: authActions.clearError,
  tradeClear: tradeActions.clearError,
  accountClear: accountActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
