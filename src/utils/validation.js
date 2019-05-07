import React from 'react';

const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return (
      <div className="require" role="alert">
        Vui lòng nhập vào trường này
      </div>
    );
  }
  return '';
};
export { required };
