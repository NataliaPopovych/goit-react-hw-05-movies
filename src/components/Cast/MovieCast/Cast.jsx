import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Error } from 'components/Error/Error.styled';
import { getMovieCast } from 'Api';
import { MovieCastList } from '../MovieCastList/MovieCastList';

export default function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieCast) return;
    const controller = new AbortController();

    async function getCast() {
      try {
        setIsLoader(true);
        setIsError(false);
        const { cast } = await getMovieCast(movieId, controller);
        if (!cast) {
          setIsError(true);
        }
        setMovieCast(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getCast();
    return () => {
      controller.abort();
    };
  }, [movieCast, movieId]);

  return (
    <>
      {movieCast && <MovieCastList movieCast={movieCast} />}
      {isLoader && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3F51B5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {isError && !isLoader && (
        <Error>
          <p>OOPS! There was an ERROR!</p>
        </Error>
      )}
    </>
  );
}
