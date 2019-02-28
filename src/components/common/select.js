import React, { Component, Fragment } from 'react';
import _ from 'lodash';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          name: 'Type the coin',
          value: null
        },
        {
          name: 'A',
          value: 'a'
        },
        {
          name: 'B',
          value: 'b'
        },
        {
          name: 'C',
          value: 'c'
        }
      ],
      value: ''
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  showItem() {
    return _.map(this.state.options, item => (
      <option key={item.value} value={item.value}>
        {item.name}
      </option>
    ));
  }

  render() {
    return (
      <Fragment>
        <select onChange={this.handleChange} value={this.state.value}>
          {this.showItem()}
        </select>
      </Fragment>
    );
  }
}

export default Select;
