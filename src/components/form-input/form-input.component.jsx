import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, error, ...otherProps }) => {
  return (
    <div className='input-group'>
      <input
        className={`${error ? 'error' : ''} input`}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : null} input-label`}
        >
          {error ? error : label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
