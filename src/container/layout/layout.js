import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from '../../components/common/header';
import Header1 from '../../components/common/header1';
import Footer from '../../components/common/footer';
// components: First

const Layout = props => (
  <div>
    {props.type ? <Header /> : <Header1 />}
    <div className="container-fluid">{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  type: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    // isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
