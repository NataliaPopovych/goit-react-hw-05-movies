import { useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import {
  AdditionalItem,
  AdditionalList,
  MovieInfoPartTitle,
  MovieInfoTitle,
  MovieInfoWrap,
  StyledLink,
  LinkBack,
  Section,
} from './MovieInfo.styled';
import { LayoutStyled } from 'components/Layout/Layout.styled';
import { PreLoaderMovie } from 'components/PreLoader/PreLoader.styled';

export function MovieInfo({ movieInfo, onScroll }) {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/`);

  return (
    <>
      <LayoutStyled>
        <LinkBack to={backLinkHref.current}>Back</LinkBack>
      </LayoutStyled>
      <Section>
        <LayoutStyled onWheel={() => onScroll()}>
          <MovieInfoWrap>
            {movieInfo.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
            ) : (
              <PreLoaderMovie />
            )}
            <div>
              <MovieInfoTitle>{movieInfo.title}</MovieInfoTitle>
              <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
              <MovieInfoPartTitle>Overveiw</MovieInfoPartTitle>
              <p>{movieInfo.overview}</p>
              <MovieInfoPartTitle>Genres</MovieInfoPartTitle>
              <p>{movieInfo.genres.map(({ name }) => name).join(', ')}</p>

              <MovieInfoPartTitle>Additional information</MovieInfoPartTitle>
              <AdditionalList>
                <AdditionalItem>
                  <StyledLink
                    to={`/movies/${movieInfo.id}/cast`}
                    state={{ from: location }}
                  >
                    Cast
                  </StyledLink>
                </AdditionalItem>
                <AdditionalItem>
                  <StyledLink
                    to={`/movies/${movieInfo.id}/reviews`}
                    state={{ from: location }}
                  >
                    Reviews
                  </StyledLink>
                </AdditionalItem>
              </AdditionalList>
            </div>
          </MovieInfoWrap>
        </LayoutStyled>
      </Section>
      <LayoutStyled>
        <Outlet />
      </LayoutStyled>
    </>
  );
}
