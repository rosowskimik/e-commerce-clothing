import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
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

  &:first-child {
    @media screen and (max-width: 340px) {
      display: none;
    }
  }

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const EmptyMessage = styled.span`
  margin-top: 16px;
  font-size: 24px;
  text-align: center;
`;

export const TotalPrice = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

export const TestWarning = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 25px;
  margin: 15px;
  color: red;

  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  & ~ span {
    margin-left: auto;
    margin-bottom: 10px;
  }
`;
