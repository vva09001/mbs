import React, { Component } from 'react';
import _ from 'lodash'

export default class FourthSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          date: '2018-10-05 15:45',
          number: 1111111111111111111111111111111111111111111111111111111,
          payment: 0.111111111,
          free: 0.111111111
        }
      ]
    };
  }

  list() {
    return _.map(this.state.datas, data => (
      <tr>
        <td>{data.date}</td>
        <td>{data.number}</td>
        <td>{data.payment}</td>
        <td>{data.free}</td>
      </tr>
    ));
  }

  render() {
    return (
      <section id="fourth">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Latest: PAYMENT <span>/ DEPOSIT</span>{' '}
                <button className="btn btn-outline-primary float-right">All Payment</button>
              </h1>
              <p>
                Last payment: 2018-10-05 15:45 | <a href="#">When and how do you get paid?</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-sm">
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col-2">Date</th>
                      <th scope="col">TXID</th>
                      <th scope="col-2">PAYMENT (BTC)</th>
                      <th scope="col-2">FREE (BTC)</th>
                    </tr>
                  </thead>
                  <tbody>{this.list()}</tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <a href="#" className="showmore">
                Show All
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
