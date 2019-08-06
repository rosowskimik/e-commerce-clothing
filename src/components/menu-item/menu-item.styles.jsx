import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    div:nth-child(2) {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  text-transform: uppercase;
  background: #fff;
  opacity: 0.7;
  position: absolute;

  h1 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 1.5rem;
    color: #4a4a4a;
  }

  span {
    font-weight: lighter;
    font-size: 1rem;
  }
`;
