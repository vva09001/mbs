import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Popup from 'components/common/popup';
import history from 'utils/history';
import PopupDone from 'components/common/popup-done';
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
      {props.buyDone && (
        <PopupDone
          showClosePopup={() => {
            props.buyClear();
            history.push({ pathname: '/buy/' });
          }}
          showViewPopup={() => {
            props.buyClear();
            history.push({ pathname: '/user/' });
          }}
        >
          <span>
            <i>Quý khách đã đăng ký mua Trái phiếu thành công</i>
          </span>
        </PopupDone>
      )}
      {props.sellDone && (
        <PopupDone
          showClosePopup={() => {
            props.sellClear();
            history.push({ pathname: '/sell/' });
          }}
          showViewPopup={() => {
            props.sellClear();
            history.push({ pathname: '/user/' });
          }}
        >
          <span>
            <i>Quý khách đã đăng ký bán Trái phiếu thành công</i>
          </span>
        </PopupDone>
      )}
      {props.buyError.status && Alert(props.buyError.message, props.buyClear)}
      {props.sellError.status && Alert(props.sellError.message, props.sellClear)}
      {props.authError.status && Alert(props.authError.message, props.authClear)}
      {props.tradeError.status && Alert(props.tradeError.message, props.tradeClear)}
      {props.accountError.status && Alert(props.accountError.message, props.accountClear)}
      {header(props)}
      <div className="container-fluid vh-100 overflow-hidden">{props.children}</div>
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
  buyDone: PropTypes.bool,
  sellDone: PropTypes.bool,
  bondsError: PropTypes.object
};

const mapStateToProps = state => {
  return {
    buyError: state.Buy.error,
    sellError: state.Sell.error,
    bondsError: state.Bonds.error,
    authError: state.Bonds.error,
    tradeError: state.Trade.error,
    accountError: state.Account.error,
    buyDone: state.Buy.buy_done,
    sellDone: state.Sell.sell_done
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
