import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Error } from 'components/Error/Error.styled';
import { getSearchMovies } from 'Api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { LayoutStyled } from 'components/Layout/Layout.styled';
import { MoviesList } from 'components/Movies/MoviesList/MoviesList';

export default function Movies() {
  const [queriedMovies, setqueriedMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') ?? '';
  const controllerRef = useRef();

  useEffect(() => {
    if (searchQuery === '') return;
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    async function getQueriedMovies() {
      try {
        setIsLoader(true);
        setIsError(false);
        const movies = await getSearchMovies(
          searchQuery,
          controllerRef.current
        );
        if (movies.length === 0) setqueriedMovies([]);
        setqueriedMovies(movies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getQueriedMovies();
    return () => {
      controllerRef.current.abort();
    };
  }, [searchQuery]);

  return (
    <LayoutStyled>
      <Searchbar />
      {searchQuery &&
        (queriedMovies.length !== 0 ? (
          <MoviesList title="Searching results" movieList={queriedMovies} />
        ) : (
          <Error>
            <p>Sorry, but there are not movies for your search.</p>
          </Error>
        ))}
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
    </LayoutStyled>
  );
}
