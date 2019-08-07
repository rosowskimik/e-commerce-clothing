import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 10px;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;
