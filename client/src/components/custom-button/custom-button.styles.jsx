import styled, { css } from 'styled-components';

const buttonStyles = css`
  background: #000;
  color: #fff;
  border: none;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const invertedButtonStyles = css`
  background: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background: #000;
    color: #fff;
    border: none;
  }
`;

const disabledButtonStyles = css`
  cursor: default;
  background: #222;
  color: #eee;
  border: none;

  & > * {
    pointer-events: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #3470cf;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  if (props.disabled) return disabledButtonStyles;

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  /* min-width: 165px; */
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 15px;
  font-weight: bolder;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  ${getButtonStyles}
`;
