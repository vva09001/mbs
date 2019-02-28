import React from 'react';
import PropTypes from 'prop-types';

const ProfitSection = props => {
  return (
    <section id="chart-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <table className="table table-hover table-dark">
              <tbody>
                <tr>
                  <td>Minimum Payout Total</td>
                  <td>{props.item.minium_payout}</td>
                </tr>
                <tr>
                  <td>Total Masternode</td>
                  <td>{props.item.quatity}</td>
                </tr>
                <tr>
                  <td>Time payout</td>
                  <td>{props.item.time_payout}</td>
                </tr>
                <tr>
                  <td>Server Name</td>
                  <td>{props.item.server_name}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
              <div className="col-sm-4 items-bottom-chart text-center">
                <div className="left">
                  <span className="dola">$ 10.1022</span>
                  <h4>
                    Minimum <br /> <span className="derection">Invest</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
ProfitSection.propTypes = {
  item: PropTypes.object
};
export default ProfitSection;
