import { MovieItem } from '../MovieItem/MovieItem';
import { MovieTitle, MoviesListStyled } from './MoviesList.styled';

export function MoviesList({ title, movieList }) {
  return (
    <>
      {movieList.length !== 0 && <MovieTitle>{title}</MovieTitle>}
      <MoviesListStyled>
        {movieList.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </MoviesListStyled>
    </>
  );
}
