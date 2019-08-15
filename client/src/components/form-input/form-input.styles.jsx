import styled, { css } from 'styled-components';

const mainColor = '#000';
const subColor = '#777';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const errorInputStyles = css`
  border-bottom: 1px solid rgb(255, 54, 54);

  & ~ label {
    color: rgb(255, 54, 54);
  }
`;

const getErrorStyles = ({ error }) => (error ? errorInputStyles : null);
const getShrinkStyles = ({ value: { length } }) =>
  length ? shrinkLabelStyles : null;

export const InputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const InputContainer = styled.input`
  background: none #fff;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;

    & ~ label {
      ${shrinkLabelStyles}
    }
  }

  ${getErrorStyles}
`;

export const InputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 300ms ease;

  ${getShrinkStyles}
`;
