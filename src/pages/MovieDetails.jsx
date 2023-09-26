import { useState, useEffect, Fragment, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { ThreeDots } from 'react-loader-spinner';
import { Error } from 'components/Error/Error.styled';
import { getMovieById } from 'Api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { LayoutStyled } from 'components/Layout/Layout.styled';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isScrollUp, setisScrollUp] = useState(false);
  const { movieId } = useParams();
  const controllerRef = useRef();

  useEffect(() => {
    if (movieInfo) return;
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    async function getMovieInfo() {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getMovieById(movieId, controllerRef.current);
        if (!data) {
          setIsError(true);
        }
        setMovieInfo(data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovieInfo();
    return () => {
      controllerRef.current.abort();
    };
  }, [movieInfo, movieId]);

  const onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 50) {
      setisScrollUp(true);
    } else {
      setisScrollUp(false);
    }
  };

  const onScrollUp = () => {
    scroll.scrollToTop();
    setisScrollUp(false);
  };

  return (
    <Fragment>
      {movieInfo && <MovieInfo movieInfo={movieInfo} onScroll={onScroll} />}
      <LayoutStyled>
        {isScrollUp && <ScrollUp onClick={onScrollUp} />}
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
    </Fragment>
  );
}
