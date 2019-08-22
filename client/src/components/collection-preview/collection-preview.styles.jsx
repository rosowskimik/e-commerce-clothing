import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled(Link)`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 25px;
  align-self: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    grid-template-rows: auto;
    justify-items: stretch;
    align-items: stretch;
  }
`;
