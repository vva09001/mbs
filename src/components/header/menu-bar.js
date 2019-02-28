import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import history from '../../utils/history';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language_mobile: [{ name: 'EN', link: '#' }, { name: 'EN2', link: '#' }],
      posts: [{ name: 'HOW IT WORKS', link: '#' }, { name: 'FAQ', link: '#' }]
    };
  }
  redirect = url => {
    const from = { pathname: url };
    history.push(from);
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-6">
          <div className="icon-menu-mobile d-sm-none">
            <i className="fas fa-bars" />
          </div>
          <a href="/">
            <img className="d-none d-sm-block" src="/img/logo.png" />
            <img width="60%" className="d-sm-none" src="/img/logo.png" alt="" />
          </a>
        </div>

        <div className="col-6 d-block d-sm-none text-right language-mobile">
          <a key={Math.random()} />
        </div>

        <div className="col-sm-8 right-menu">
          <a href="#">HOW IT WORKS?</a>
          <a href="#">FAQ</a>
          <button
            onClick={this.redirect.bind(this, '/login')}
            type="button"
            className="btn btn-outline-primary"
          >
            Login
          </button>
          <button
            onClick={this.redirect.bind(this, '/signup')}
            type="button"
            className="btn btn-primary"
          >
            Sign Up
          </button>
          <DropdownButton
            title={
              <div className="bootstrap-button">
                {' '}
                EN
                <img src="/img/en.png" />
              </div>
            }
            id="dropdownMenuButton"
          >
            <MenuItem eventKey="1" className="dropdown-item" href="#">
              EN <img src="/img/en.png" />
            </MenuItem>
            <MenuItem eventKey="2" className="dropdown-item" href="#">
              EN <img src="/img/en.png" />
            </MenuItem>
            <MenuItem eventKey="3" className="dropdown-item" href="#">
              EN <img src="/img/en.png" />
            </MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default MenuBar;
