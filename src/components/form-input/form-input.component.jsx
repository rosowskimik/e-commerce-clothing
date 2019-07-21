import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='input-group'>
      <input className='input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : null} input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
