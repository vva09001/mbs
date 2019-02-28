import React from 'react';
import { ToastContainer } from 'react-toastify';

// import style
import 'react-toastify/dist/ReactToastify.css';

const RootContainer = props => {
  return (
    <div className="App">
      {props.children}
      <ToastContainer />
    </div>
  );
};
export default RootContainer;
