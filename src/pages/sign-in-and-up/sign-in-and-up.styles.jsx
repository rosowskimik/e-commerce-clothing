import styled from 'styled-components';

export const SignInAndUpPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-template-rows: auto;
  gap: 50px;
  margin-top: 50px;
`;

export const StyledError = styled.div`
  display: ${props => (props.error ? 'flex' : 'none')};
  position: absolute;
  top: 75px;
  width: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(255, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  font-size: 1rem;
  padding: 15px;
`;
