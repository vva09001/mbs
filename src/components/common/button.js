import React from 'react';

const ButtonLogin = props => {
  return (
    <button onClick={props.click} type="button" className="btn btn-outline-primary">
      Login
    </button>
  );
};

const ButtonSignUp = props => {
  return (
    <button onClick={props.click} type="button" className="btn btn-primary">
      Sign Up
    </button>
  );
};
const ButtonCreate = props => {
  return (
    <button onClick={props.click} type="button" className="btn btn-primary">
      Create your invest
    </button>
  );
};

export { ButtonLogin, ButtonSignUp, ButtonCreate };
