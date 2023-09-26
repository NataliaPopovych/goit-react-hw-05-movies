import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  flex-basis: calc((100% - 5 * 28px) / 6);
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  border: 1px solid #blue;
  border-radius: 12px;
  transition: transform 250ms linear, box-shadow 250ms linear;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);

  & img {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  & p {
    margin: 12px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.24;
    color: #000000;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
