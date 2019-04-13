import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Footer from 'components/common/footer';
import Popup from 'components/common/popup';
// actions
import buyActions from 'store/buy/actions';
import sellActions from 'store/sell/actions';
import bondsActions from 'store/bonds/actions';
import authActions from 'store/bonds/actions';
import tradeActions from 'store/trade/actions';

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
      return (
        <Header
          title={props.title}
          toggle={props.toggle}
          onToggle={props.onToggle}
          onClick={props.onClick}
        />
      );
  }
};

header.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  toggle: PropTypes.bool,
  onToggle: PropTypes.func,
  onClick: PropTypes.func
};

const Alert = (message, toggle) => (
  <Popup title="Thông tin Trái phiếu" showPopup={() => toggle()}>
    <p>{message}</p>
  </Popup>
);

const Layout = props => {
  if (props.isLoggedIn) {
    return (
      <Fragment>
        {props.buyError.status && Alert(props.buyError.message, props.buyClear)}
        {props.sellError.status && Alert(props.sellError.message, props.sellClear)}
        {props.tradeError.status && Alert(props.tradeError.message, props.tradeClear)}
        {header(props)}
        <div className="container-fluid min-vh-100">{props.children}</div>
        <Footer />
      </Fragment>
    );
  }
  return (
    <Fragment>
      {header(props)}
      <div className="container-fluid min-vh-100 text-center">
        <h1>No Auth</h1>
      </div>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  buyError: PropTypes.object,
  buyClear: PropTypes.func,
  sellError: PropTypes.object,
  sellClear: PropTypes.func,
  tradeError: PropTypes.object,
  tradeClear: PropTypes.func,
  bondsError: PropTypes.object,
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false,
    buyError: state.Buy.error,
    sellError: state.Sell.error,
    bondsError: state.Bonds.error,
    tradeError: state.Trade.error
  };
};

const mapDispatchToProps = {
  buyClear: buyActions.clearError,
  sellClear: sellActions.clearError,
  bondsClear: bondsActions.clearError,
  authClear: authActions.clearError,
  tradeClear: tradeActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
