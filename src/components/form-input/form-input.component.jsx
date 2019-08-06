import React from 'react';

import {
  InputGroupContainer,
  InputContainer,
  InputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, error, ...otherProps }) => {
  return (
    <InputGroupContainer>
      <InputContainer error={error} onChange={handleChange} {...otherProps} />
      {label ? (
        <InputLabel error={error} value={otherProps.value}>
          {error ? error : label}
        </InputLabel>
      ) : null}
    </InputGroupContainer>
  );
};

export default FormInput;
