import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }
`;

export const StyledCustomButton = styled(CustomButton)`
  @media screen and (max-width: 455px) {
    /* min-width: initial; */
    width: 100%;
  }
`;
