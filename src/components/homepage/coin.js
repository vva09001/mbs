import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import history from '../../utils/history';

export default class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [
          {
            labels: ['xam'],
            data: [12],
            backgroundColor: ['rgba(47, 72, 84, 1)'],
            borderColor: [],
            borderWidth: 0
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data1: {
        datasets: [
          {
            labels: ['xanh'],
            data: [40, 60],
            backgroundColor: ['rgba(0, 196, 86, 1)', 'transparent'],
            borderColor: [],
            borderWidth: 0
          }
        ]
      },
      options1: {
        cutoutPercentage: 50,
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };
  }
  _goDetail(id) {
    history.push({
      pathname: '/coin-detail/' + id
    });
  }
  chart() {
    return (
      <div className="c-chart">
        <div className="layer-1">
          <Doughnut
            width={223}
            height={220}
            data={this.state.data}
            options={this.state.options}
            id="myChart1"
          />
        </div>
        <div className="layer-2">
          <Doughnut
            width={223}
            height={220}
            data={this.state.data1}
            options={this.state.options1}
            id="myChart2"
          />
        </div>
        <div className="available-percents text-center">
          <h4>Raised</h4>
          <h3 className="u-percent text-blue">
            39
            <span>%</span>
          </h3>
        </div>
      </div>
    );
  }
  render() {
    const { item } = this.props;
    return (
      <div className="col-6 col-sm-3">
        <div className="stake">
          <h3 className="title">
            <a onClick={() => this._goDetail(item.id)}>{item.name}</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="type">
              <h4>10 / {item.quatity}</h4>
            </div>
            <div>
              <h4 className="exchange-rate m-0">$0.00227</h4>
              <div className="percent text-red ">-4.82 %</div>
            </div>
          </div>
          {this.chart()}
          <div className="text-center mb-4 mt-3">
            <span className="text-secondary">ROI</span> 73 %
          </div>
          <div className="buttons d-flex flex-column align-items-center">
            <a href="https://2masternodes.com/pac-masternode" className="main-btn">
              GÓP VỐN ĐẦU TƯ
            </a>
            <a href="https://2masternodes.com/pac-masternode" className="buy-all">
              ĐẦU TƯ 100%
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Coin.propTypes = {
  item: PropTypes.object
};
