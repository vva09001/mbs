import React from 'react';
import { connect } from 'react-redux';
// components: header
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
// components: First

const Layout1 = props => (
  <div>
    <Header />
    <div className="container-fluid">{props.children}</div>
    <Footer />
  </div>
);
const mapStateToProps = state => {
  return {
    // isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout1);
