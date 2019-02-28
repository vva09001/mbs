import React, { Fragment } from 'react';

const Social = () => {
  return (
    <Fragment>
      <div className="title-more">
        <span>Or login social</span>
      </div>
      <div className="btn-social">
        <div className="row">
          <div className="col-sm-6">
            <button>
              <i className="fab fa-facebook" />
              Facebook
            </button>
          </div>
          <div className="col-sm-6">
            <button>
              <i className="fab fa-twitter" />
              Twitter
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Social;
