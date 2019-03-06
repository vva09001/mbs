import React from 'react';
import { ToastContainer } from 'react-toastify';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../style/index.scss';

const RootContainer = props => {
  return (
    <div className="App">
      {props.children}
      <ToastContainer />
    </div>
  );
};
export default RootContainer;
