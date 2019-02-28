import React, { Component } from 'react';

import Select from '../common/select';
import SlideContainer from '../slide/container';
import ListCalculator from './list';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <h1>Profit Calculator</h1>
        <p>ROI is calculated based on block reward for last 24 hours.</p>
        <span>Montex couldnt guarantee the ROI to be a constant value</span>
        <h2>Choise the coin</h2>
        <Select />
        <SlideContainer />
        <ListCalculator />
        <button className="btn btn-primary">Create your invest</button>
      </div>
    );
  }
}

export default Calculator;
