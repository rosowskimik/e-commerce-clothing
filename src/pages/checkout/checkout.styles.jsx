import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const EmptyMessage = styled.span`
  margin-top: 16px;
  font-size: 24px;
`;

export const TotalPrice = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 25px;
  margin: 15px;
  color: red;

  & ~ span {
    margin-left: auto;
    margin-bottom: 10px;
  }
`;
