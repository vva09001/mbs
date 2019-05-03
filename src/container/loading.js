import React from 'react';
import Loading from 'components/common/loading';

const LoadingPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Loading />
      <h3 className="mt-4">Đang chuyển hướng xử lý sang Viettel...</h3>
    </div>
  );
};

LoadingPage.propTypes = {};

export default LoadingPage;
