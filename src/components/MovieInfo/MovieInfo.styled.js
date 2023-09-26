import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  background-color: green;
  padding: 24px 0;
  margin-top: 12px;
`;

export const MovieInfoWrap = styled.div`
  display: flex;
  justify-content: left;
  gap: 36px;

  & img {
    border: 1px solid #cccccc;
    border-radius: 12px;
    box-shadow: 3px 3px 10px black;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1.2;
  }
`;

export const MovieInfoTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.1;
  margin-top: 24px;
  margin-bottom: 36px;
`;

export const MovieInfoPartTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.1;
  margin-top: 18px;
  margin-bottom: 12px;
`;

export const AdditionalList = styled.ul`
  list-style: disc;
  padding-left: 32px;
`;

export const AdditionalItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.2;
  color: #032541;

  &.active {
    color: #11b5dc;
    font-weight: 600;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #11b5dc;
    transform: scale(1.05);
    text-decoration: underline;
  }
`;

export const LinkBack = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2;
  color: #000000;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 8px 24px;
  transition: transform 250ms linear, box-shadow 250ms linear;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #ffffff;
    background-color: #1cb8d8;
  }
`;
