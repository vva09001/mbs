import React, { Suspense } from 'react';

// import style
import 'font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/index.scss';
import Loading from '../components/common/loading';

const RootContainer = props => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </div>
  );
};

export default RootContainer;
