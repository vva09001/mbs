import React from 'react';

const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return (
      <div className="alert alert-danger mt-2" role="alert">
        Require
      </div>
    );
  }
  return '';
};
export { required };
