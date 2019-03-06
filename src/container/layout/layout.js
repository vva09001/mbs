import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from '../../components/common/header';
import Header1 from '../../components/common/header1';
import Footer from '../../components/common/footer';
// components: First

const Layout = props => (
  <div className="container-fluid">
    {props.type ? <Header title={props.title} /> : <Header1 title={props.title} />}
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  type: PropTypes.bool,
  title: PropTypes.string
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
