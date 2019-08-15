import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  z-index: 99;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;

  @media screen and (max-height: 400px) {
    position: absolute;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 30px;
  justify-self: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
