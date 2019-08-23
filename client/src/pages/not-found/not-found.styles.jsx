import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundImage = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const NotFoundHeader = styled.h2`
  font-size: 2rem;
`;

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 1.1rem;
  }
`;
