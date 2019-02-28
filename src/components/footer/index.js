import React from 'react';

const footer = () => {
  return (
    <footer id="footer" className="clearfix">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="">
              Fully compatible <img src="/img/footer.png" />
            </div>
            <div className="server-status">
              <h5>SERVER STATUS</h5>
              <ul>
                <li>Europe - Amsterdam</li>
                <li>USA - San Joe</li>
                <li>Canada - Manitoba</li>
                <li>China - Hong Kong</li>
                <li>Singapore - Mandai</li>
                <li>Japan - Tokyo</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="risk">
              <h3>RISK WARNING</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
          </div>
        </div>
      </div>
      <div id="sub-floor">
        <div className="container">
          <div className="row">
            <div className="logo-footer text-center">
              <img src="/img/logo-footer.png" />
            </div>
            <div className="ticket">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
              <div className="row align-items-center">
                <div className="col-md-10">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="col-md-2">
                  <button className="btn btn-sucess question">
                    <img src="/img/question.png" /> Hỏi đáp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
