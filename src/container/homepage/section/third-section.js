import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Coin from '../../../components/homepage/coin';
import _ from 'lodash';

const ThirdSection = props => {
  return (
    <section id="third">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              Masternodes: SHARE <span>/ STAKE</span>
            </h1>
          </div>
          <div className="col-5">
            <p>
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy
            </p>
          </div>
        </div>
        <div className="row">
          {_.map(props.coins, coin => (
            <Coin item={coin} />
          ))}
        </div>
      </div>
    </section>
  );
};

ThirdSection.propTypes = {
  coins: PropTypes.array
};

const mapStateToProps = state => {
  return {
    coins: state.Coin.list
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdSection);
