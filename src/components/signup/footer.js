import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-login">
      <div className="row">
        <div className="col-6 col-sm-6">
          <p>Want to try Montex Network</p>
          <Link to="/login">Login here? </Link>
        </div>
        <div className="col-6 col-sm-6 text-right">
          <Link to="/">
            Try Guest mode <i className="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
