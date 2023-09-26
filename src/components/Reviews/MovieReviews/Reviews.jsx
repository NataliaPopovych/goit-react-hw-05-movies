import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Error } from 'components/Error/Error.styled';
import { getMovieReviews } from 'Api';
import { MovieReviewsList } from '../MovieReviewsList/MovieReviewsList';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieReviews) return;
    const controller = new AbortController();

    async function getReviews() {
      try {
        setIsLoader(true);
        setIsError(false);
        const { results } = await getMovieReviews(movieId, controller);
        if (!results) {
          setIsError(true);
        }
        if (results.length !== 0) setMovieReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getReviews();
    return () => {
      controller.abort();
    };
  }, [movieReviews, movieId]);

  return (
    <>
      {movieReviews ? (
        <MovieReviewsList movieReviews={movieReviews} />
      ) : (
        <Error>
          <p>Sorry, we don't have any reviews for this movie.</p>
        </Error>
      )}
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
