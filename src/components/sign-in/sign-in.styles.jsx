import styled from 'styled-components';

export const SignInContainer = styled.div`
  min-width: 360px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 10px;
`;
