import React, { Component } from 'react';

import TopBar from './top-bar';
import MenuBar from './menu-bar';
import Calculator from '../calculator/calculator';
import SliderItem from '../slide/item';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  showSlider() {
    return (
      <div className="container">
        <div className="row bottom-bar">
          <div className="col-sm-7">
            <SliderItem />
          </div>
          <div className="col-sm-5">
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="fixed-header">
            <div className="container">
              <TopBar />
              <MenuBar />
            </div>
          </div>
          {this.props.slide && this.showSlider()}
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
