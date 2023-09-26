import { useLocation } from 'react-router-dom';
import { MovieItemStyled, LinkStyled } from './MovieItem.styled';
import { PreLoaderMovieList } from 'components/PreLoader/PreLoader.styled';

export function MovieItem({ movie }) {
  const location = useLocation();
  return (
    <MovieItemStyled>
      <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <PreLoaderMovieList />
        )}
        <p>{movie.title}</p>
      </LinkStyled>
    </MovieItemStyled>
  );
}
