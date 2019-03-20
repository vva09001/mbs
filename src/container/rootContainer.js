import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/index.scss';
import Loading from '../components/common/loading'

const RootContainer = props => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {props.children}
        <ToastContainer />
      </Suspense>
    </div>
  );
};
export default RootContainer;
