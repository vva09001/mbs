import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout1 from '../layout/layout1';
import FirstSection from './section/first-section';
import SecondSection from './section/second-section';
import ThirdSection from './section/third-section';
import FourthSection from './section/fourth-section';
import FifthSection from './section/fifth-section';
import coinActions from '../../store/coin/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.listCoin();
  }
  render() {
    return (
      <Layout1 slide={true}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </Layout1>
    );
  }
}

HomePage.propTypes = {
  listCoin: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  listCoin: coinActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
