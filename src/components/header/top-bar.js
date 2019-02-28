import React, { Component } from 'react';
import _ from 'lodash';
import Marquee from './marquee';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [
        { name: 'Ethereum1', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum2', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' },
        { name: 'Ethereum', price: '$6,682.24', down: '(-0.81%)' }
      ]
    };
  }
  MarQuee() {
    const marquee = _.map(this.state.slide, slide => (
      <li key={Math.random()}>
        {slide.name}: <span className="price">{slide.price}</span>
        <span className="down">{slide.down}</span>
      </li>
    ));
    return <ul>{marquee}</ul>;
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="top-bar">
            <Marquee>{this.MarQuee()}</Marquee>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
