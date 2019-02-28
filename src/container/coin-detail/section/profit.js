import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideContainer from '../../../components/slide/container';

class ProfitSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="profit">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 new-zcoin">
              <h3>NEW ZCOIN Masternode funded</h3>
              <div className="dola-zcoin">
                <img src="images/zcoin.png" alt="" />
                <span>${this.props.item.price}</span>
              </div>
              <div className="dola-zcoin-right">
                <h5>(+0.69%)</h5>
                <span>0.02759550 BTC</span>
              </div>
              <div className="clearfix" />
              <div className="funded">
                <div className="left-funded">
                  <h4>Funded</h4>
                  <span>this node</span>
                </div>
                <div className="right-funded">
                  <span>10%</span>
                  <span className="value">&nbsp; ≈ &nbsp;$ 22.70 </span>
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">
                <div className="col-12">
                  <div className="progress-bar">
                    <span className="progress" />
                  </div>
                </div>
              </div>
              <div className="table-total">
                <div className="col-table-total text-center">
                  <h5>Masternode</h5>
                  <span>cost value</span>
                  <h3>$ 9,676.14</h3>
                </div>
                <div className="col-table-total text-center">
                  <h5>Masternode</h5>
                  <span>cost value</span>
                  <h3>$ 9,676.14</h3>
                </div>
                <div className="col-table-total text-center">
                  <h5>Masternode</h5>
                  <span>cost value</span>
                  <h3>$ 9,676.14</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-5 z-coin-profit">
              <h3>ZCOIN Profit: 19.64%/ mo</h3>
              <span>
                ROI is calculated bases on the block rewards for the last 24 hours. Montex Network
                couldnt guarantee the ROI to be a constant value.
              </span>
              <div className="d_progress_bar">
                <div className="d_progress_bar_left">
                  <SlideContainer />
                </div>
                <div className="list-calculator d_list-calculator">
                  <div className="col6">Your holding:</div>
                  <div className="col6">
                    0.0 <span>~</span> $0.0
                  </div>
                  <div className="col6">Your holding:</div>
                  <div className="col6">
                    0.0 <span>~</span> $0.0
                  </div>
                  <div className="col6">Your holding:</div>
                  <div className="col6">
                    0.0 <span>~</span> $0.0
                  </div>
                  <div className="col6">Your holding:</div>
                  <div className="col6">
                    0.0 <span>~</span> $0.0
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row mt-20">
                <div className="col-sm-8 btn-create">
                  <button>Create Your Invest</button>
                </div>
                <div className="col-sm-4 btn-quick">
                  <button>Quick Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
ProfitSection.propTypes = {
  item: PropTypes.object
};
export default ProfitSection;
