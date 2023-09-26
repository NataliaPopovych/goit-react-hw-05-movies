import { MovieCastItem } from '../MovieCastItem/MovieCastItem';
import { CastList } from './MovieCastList.dtyled';

export function MovieCastList({ movieCast }) {
  return (
    <>
      <CastList>
        {movieCast.map(({ id, ...cast }) => (
          <MovieCastItem key={id} cast={cast} />
        ))}
      </CastList>
    </>
  );
}
