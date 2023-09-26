import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import {
  HeaderStyled,
  LayoutStyled,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';

export function Layout() {
  return (
    <>
      <HeaderStyled>
        <LayoutStyled>
          <Navigation>
            <Link to="/"></Link>
            <NavList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavList>
          </Navigation>
        </LayoutStyled>
      </HeaderStyled>
      <main>
        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="darkgreen"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ justifyContent: 'center' }}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
