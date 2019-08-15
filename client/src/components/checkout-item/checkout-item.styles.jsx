import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1rem;
  text-align: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 340px) {
    display: none;
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  justify-content: center;
  -webkit-user-select: none;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
