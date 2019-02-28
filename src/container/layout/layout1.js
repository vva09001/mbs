import React from 'react';
import { connect } from 'react-redux';
// components: header
import Header from '../../components/header';
import Footer from '../../components/footer';
// components: First

const Layout1 = props => (
  <div>
    <Header slide={props.slide} isLoggedIn={props.isLoggedIn}/>
    {props.children}
    <Footer />
  </div>
);
const mapStateToProps = state => {
  return {
    isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout1);
