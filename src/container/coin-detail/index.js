import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Layout1 from '../layout/layout1';
import ProfitSection from './section/profit';
import ChartBottom from './section/chart-bottom';
import FourthSection from '../homepage/section/fourth-section';
import FifthSection from '../homepage/section/fifth-section';
import coinActions from '../../store/coin/actions';

class CoinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin_id: '',
      data: {
        datasets: [
          {
            label: 'Dataset with string point data',
            // backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            backgroundColor: '#00C456',
            borderColor: '#00C456',
            fill: false,
            data: [
              {
                x: 15,
                y: 3
              },
              {
                x: 20,
                y: 4
              },
              {
                x: 25,
                y: 1
              },
              {
                x: 30,
                y: 2
              }
            ]
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: ''
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              },
              ticks: {
                major: {
                  fontStyle: 'bold',
                  fontColor: '#FF0000'
                }
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'value'
              }
            }
          ]
        }
      }
    };
  }
  _getDetail() {
    this.setState(
      {
        coin_id: this.props.match.params.id
      },
      () => {
        this.props.detail(this.state.coin_id);
      }
    );
  }
  componentDidMount() {
    this._getDetail();
  }
  render() {
    return (
      <Layout1>
        <section id="chart">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <Line
                    width={'1280'}
                    height={500}
                    data={this.state.data}
                    options={this.state.options}
                    id="myChart1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ChartBottom item={this.props.coin} />
        <ProfitSection item={this.props.coin} />

        <FourthSection />
        <FifthSection />
      </Layout1>
    );
  }
}
CoinDetail.propTypes = {
  detail: PropTypes.func,
  match: PropTypes.object,
  coin: PropTypes.object
};
const mapStateToProps = state => {
  return {
    coin: state.Coin.detail
  };
};

const mapDispatchToProps = {
  detail: coinActions.detail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinDetail);
