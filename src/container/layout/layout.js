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
      return (
        <Header
          title={props.title}
          toggle={props.toggle}
          onToggle={props.onToggle}
          onClick={props.onClick}
          filterPicked={props.filterPicked}
        />
      );
  }
};

header.propTypes = {
  type: PropTypes.number,
  filterPicked: PropTypes.number,
  title: PropTypes.string,
  toggle: PropTypes.bool,
  onToggle: PropTypes.func,
  onClick: PropTypes.func
};

const Alert = (message, toggle) => (
  <Popup showPopup={() => toggle()}>
    <p>{message}</p>
  </Popup>
);

const Layout = props => {
  const { t } = useTranslation();
  if (!props.isLoggedIn) {
    return (
      <Fragment>
        {props.buyDone.status && (
          <PopupDone
            showClosePopup={() => {
              props.clear();
              history.push({ pathname: '/buy/' });
            }}
            showViewPopup={() => {
              props.clear();
              history.push({ pathname: '/user/' });
            }}
          >
            <span>
              <i>{props.buyDone.message}</i>
            </span>
          </PopupDone>
        )}
        {props.sellDone.status && (
          <PopupDone
            showClosePopup={() => {
              props.clear();
              history.push({ pathname: '/sell/' });
            }}
            showViewPopup={() => {
              props.clear();
              history.push({ pathname: '/trade/' });
            }}
          >
            <span>
              <i>{props.sellDone.message}</i>
            </span>
          </PopupDone>
        )}
        {props.tradeDone.status && (
          <PopupDone
            showClosePopup={() => {
              props.clear();
              history.push({ pathname: '/trade/' });
            }}
            showViewPopup={() => {
              props.clear();
              history.push({ pathname: '/user/' });
            }}
          >
            <span>
              <i>{props.tradeDone.message}</i>
            </span>
          </PopupDone>
        )}
        {props.error.status && Alert(props.error.message, props.clear)}
        {header(props)}
        <div className="container-fluid min-vh-100 text-center">
          <div className="wapper">
            {t('timeOutLogin')}
            <div className="icon-noProduct">
              <img src="/img/iconfinder_icon.png" alt="logo" />
            </div>
          </div>
        </div>
        <Footer active={props.active} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      {props.buyDone.status && (
        <PopupDone
          showClosePopup={() => {
            props.clear();
            history.push({ pathname: '/buy/' });
          }}
          showViewPopup={() => {
            props.clear();
            history.push({ pathname: '/user/' });
          }}
        >
          <span>
            <i>{props.buyDone.message}</i>
          </span>
        </PopupDone>
      )}
      {props.sellDone.status && (
        <PopupDone
          showClosePopup={() => {
            props.clear();
            history.push({ pathname: '/sell/' });
          }}
          showViewPopup={() => {
            props.clear();
            history.push({ pathname: '/trade/' });
          }}
        >
          <span>
            <i>{props.sellDone.message}</i>
          </span>
        </PopupDone>
      )}
      {props.tradeDone.status && (
        <PopupDone
          showClosePopup={() => {
            props.clear();
            history.push({ pathname: '/trade/' });
          }}
          showViewPopup={() => {
            props.clear();
            history.push({ pathname: '/user/' });
          }}
        >
          <span>
            <i>{props.tradeDone.message}</i>
          </span>
        </PopupDone>
      )}
      {props.error.status && Alert(props.error.message, props.clear)}
      {header(props)}
      <div className="container-fluid min-vh-100">{props.children}</div>
      <Footer active={props.active} />
    </Fragment>
  );
};

Layout.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  active: PropTypes.string,
  onClick: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node,
  buyDone: PropTypes.object,
  sellDone: PropTypes.object,
  tradeDone: PropTypes.object,
  error: PropTypes.object,
  clear: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false,
    error: state.Error.error,
    buyDone: state.Error.buy_done,
    sellDone: state.Error.sell_done,
    tradeDone: state.Error.trade_done
  };
};

const mapDispatchToProps = {
  clear: errorActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
