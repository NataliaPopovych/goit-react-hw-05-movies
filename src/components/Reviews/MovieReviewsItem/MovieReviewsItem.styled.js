import styled from 'styled-components';

export const RevuewsItem = styled.li`
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 3px 3px 10px black;
  padding: 12px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ReviewAuthor = styled.p`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.2;
  margin-bottom: 12px;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.2;
`;
