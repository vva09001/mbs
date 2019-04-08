import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from '../../components/common/header';
import Header1 from '../../components/common/header1';
import Header2 from '../../components/common/header2';
import Header3 from '../../components/common/header3';
import Footer from '../../components/common/footer';
import Popup from '../../components/common/popup';

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

const Alert = message => (
  <Popup title="Thông tin trái phiếu">
    <p>{message}</p>
  </Popup>
);

const Layout = props => {
  if (props.isLoggedIn) {
    return (
      <Fragment>
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
  buyError: PropTypes.string,
  sellError: PropTypes.string,
  bondsError: PropTypes.string,
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.Auth.token !== null ? true : false,
    buyError: state.Buy.error,
    sellError: state.Sell.error,
    bondsError: state.Bonds.error
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
