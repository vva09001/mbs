import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import history from 'utils/history';
// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Popup from 'components/common/popup';
import PopupDone from 'components/common/popup-done';
import Footer from 'components/common/footer';
// actions
import errorActions from 'store/error/actions';

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
const Alert = (message, toggle, closeText) => (
  <Popup showPopup={() => toggle()} closeText={closeText}>
    <p>{message}</p>
  </Popup>
);
const AlertDone = (message, pathnameClose, pathnameShow, clear) => (
  <PopupDone
    showClosePopup={() => {
      clear();
      history.push({ pathname: pathnameClose });
    }}
    showViewPopup={() => {
      clear();
      history.push({ pathname: pathnameShow });
    }}
  >
    <span>
      <i>{message}</i>
    </span>
  </PopupDone>
);
const Layout = props => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {props.buyDone.status && AlertDone(t(props.buyDone.message), '/buy/', '/user/', props.clear)}
      {props.sellDone.status &&
        AlertDone(t(props.sellDone.message), '/sell/', '/trade/', props.clear)}
      {props.tradeDone.status &&
        AlertDone(t(props.tradeDone.message), '/trade/', '/user/', props.clear)}
      {props.tradeEditDone.status && Alert(t(props.tradeEditDone.message), props.clear, 'XEM')}
      {props.error.status && Alert(t(props.error.message) + props.error.message2, props.clear)}
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
  buyDone: PropTypes.object,
  sellDone: PropTypes.object,
  tradeDone: PropTypes.object,
  tradeEditDone: PropTypes.object,
  error: PropTypes.object,
  clear: PropTypes.func
};

const mapStateToProps = state => {
  return {
    error: state.Error.error,
    buyDone: state.Error.buy_done,
    sellDone: state.Error.sell_done,
    tradeDone: state.Error.trade_done,
    tradeEditDone: state.Error.trade_edit_done
  };
};

const mapDispatchToProps = {
  clear: errorActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
