import React, { Component, Fragment } from 'react';
import _ from 'lodash';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          name: 'Your holding:',
          from: 0.0,
          to: '$0.0'
        },
        {
          name: 'Your holding:',
          from: 10.0,
          to: '$0.0'
        }
      ]
    };
  }
  list() {
    return _.map(this.state.history, item => (
      <Fragment>
        <div className="col6">{item.name}</div>
        <div className="col6">
          {item.from} <span>~</span> {item.to}
        </div>
      </Fragment>
    ));
  }
  render() {
    return <div className="list-calculator">{this.list()}</div>;
  }
}

export default List;
