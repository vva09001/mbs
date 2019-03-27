import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';
import accountActions from '../../store/account/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.checkAuth(this.props.match.params)
  }
  render() {
    return (
      <Layout type={3}>
        <div className="row">
          <div className="col-12">
            <h2></h2>
          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  checkAuth: PropTypes.func
};

const mapStateToProps = state => {
  return {
    auth: state.Account.auth
  };
};

const mapDispatchToProps = {
  checkAuth: accountActions.auth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
