import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background: #fff;
  top: 80px;
  right: 15px;
  z-index: 99;

  @media screen and (max-height: 400px) {
    position: absolute;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
