import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  position: relative;
  min-width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    & div:first-child {
      opacity: 0.85;

      @media screen and (max-width: 600px) {
        opacity: unset;
      }
    }

    button {
      display: flex;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const PriceContainer = styled.span`
  font-weight: 600;
`;

export const AddButton = styled(CustomButton)`
  max-width: 80%;
  position: absolute;
  top: 255px;
  display: none;
  justify-content: center;

  @media screen and (max-width: 885px) and (min-width: 720px) {
    transform: scale(0.83);
  }

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
