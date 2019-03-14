import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components: header
import Header from '../../components/common/header';
import Header1 from '../../components/common/header1';
import Header2 from '../../components/common/header2';
import Footer from '../../components/common/footer';
// components: First
const header = props => {
  switch (props.type) {
    case 1:
      return (<Header1 title={props.title} />)
      break;
    case 2:
      return (<Header2 title={props.title} />)
      break;
    default:
      return (<Header title={props.title} />)
  }
}
const Layout = props => (
  <div className="container-fluid">
    {header(props)}
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  type: PropTypes.number,
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
