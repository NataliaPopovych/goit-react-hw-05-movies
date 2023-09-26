import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: darkgreen;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const LayoutStyled = styled.div`
  width: 1272px;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled.img`
  width: 120px;
  padding: 16px 0;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  padding: 16px 0;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: #16b2d5;
    text-decoration: underline;
  }
`;
