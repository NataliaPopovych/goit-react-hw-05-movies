import styled from 'styled-components';

export const CastItem = styled.li`
  flex-basis: calc((100% - 6 * 24px) / 7);
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 3px 3px 10px black;

  & img {
    width: 100%;
    height: 220px;
  }
`;

export const CastDetailWrap = styled.div`
  padding: 12px 8px;
`;

export const CastName = styled.p`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.2;
  margin-bottom: 12px;
`;

export const CastCharacter = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.2;
`;
