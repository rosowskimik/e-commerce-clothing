import styled from 'styled-components';

export const ContactPageOverlay = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledText = styled.p`
  display: inline-block;
  width: 80%;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled.a`
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 4rem;
`;
