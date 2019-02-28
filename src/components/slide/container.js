import React, { Component } from 'react';

import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';

class SlideContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0
    };
  }

  handleChangeStart = () => {};

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {};

  render() {
    const { value } = this.state;
    return (
      <div className=" slidecontainer">
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className="value range-result">{value}%</div>
      </div>
    );
  }
}

export default SlideContainer;
