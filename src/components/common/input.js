import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div className="group-input">
      <label htmlFor="">{props.title}</label>
      <div className="control-input">
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <i className={props.icon} />
      </div>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleInput: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
