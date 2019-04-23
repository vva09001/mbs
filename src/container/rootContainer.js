import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'style/index.scss';

import Loading from 'components/common/loading';

const RootContainer = props => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </div>
  );
};
RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
