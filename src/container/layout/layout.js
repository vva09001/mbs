import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Popup from 'components/common/popup';
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
        {header(props)}
        <div className="container-fluid min-vh-100 text-center">
          <div className="wapper">
            {t('Chưa đăng nhập')}
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
  isLinked: PropTypes.bool,
  children: PropTypes.node,
  error: PropTypes.object,
  clear: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false,
    isLinked: state.Account.isExist === 1 ? true : false,
    error: state.Error.error
  };
};

const mapDispatchToProps = {
  clear: errorActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
