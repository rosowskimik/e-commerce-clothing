import styled from 'styled-components';

export const ContactPageOverlay = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactPageImage = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ContactPageText = styled.h2`
  font-size: 2rem;
`;
