import React from 'react';
import { IMAGES_URL } from '../../utils/constants.ts';
import { filterOnRequest, filterOnDuration } from '../../utils/helpers';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Movies from '../Movies/Movies';

export default function AllMovies({
  isLoading,
  setIsLoading,
  infoMessage,
  setInfoMessage,
  screenParams,
  bookmarkedMovies,
  setBookmarkedMovies,
}) {
  const [cardsNumber, setCardsNumber] = React.useState(
    sessionStorage.getItem('cardsNumber') ? Number(sessionStorage.cardsNumber) : screenParams.init,
  );
  const [request, setRequest] = React.useState(
    sessionStorage.getItem('requestAllMovies') ? sessionStorage.requestAllMovies : '',
  );
  const [filter, setFilter] = React.useState(
    sessionStorage.getItem('filterAllMovies') ? JSON.parse(sessionStorage.filterAllMovies) : false,
  );
  const [result, setResult] = React.useState(
    sessionStorage.getItem('resultAllMovies') ? JSON.parse(sessionStorage.resultAllMovies) : [],
  );
  const [movies, setMovies] = React.useState([]);
  const [isSearchDisabled, setIsSearchDisabled] = React.useState(false);

  React.useEffect(() => {
    if (!bookmarkedMovies) {
      setInfoMessage({
        message:
          'In this section you can search for films from the Beat Film Festival catalog and add them to your bookmarks. Enter your query and start searching',
        type: 'info',
      });
      setIsLoading(true);
      mainApi
        .getBookmarkedMovies()
        .then((res) => {
          setBookmarkedMovies(res);
        })
        .catch((err) => {
          setInfoMessage({
            message: err.message,
            type: 'error',
          });
        })
        .finally(() => setIsLoading(false));
    } else {
      setInfoMessage({
        message: '',
        type: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBookmarkedMovies, setInfoMessage, setIsLoading]);

  React.useEffect(() => {
    sessionStorage.setItem('filterAllMovies', JSON.stringify(filter));
    result && setMovies(filterOnDuration(filter, result));
  }, [filter, result]);

  function getAllMovies() {
    if (!sessionStorage.getItem('allMovies')) {
      return moviesApi
        .getMovies()
        .then((res) =>
          res.map((movie) => {
            return {
              country: movie.country.toString(),
              director: movie.director.toString(),
              duration: Number(movie.duration),
              year: movie.year.toString(),
              description: movie.description.toString(),
              image: IMAGES_URL + movie.image.url.toString(),
              trailerLink: movie.trailerLink.toString(),
              thumbnail: IMAGES_URL + movie.image.formats.thumbnail.url.toString(),
              movieId: Number(movie.id),
              nameEN: movie.nameEN.toString(),
              nameRU: movie.nameRU.toString(),
            };
          }),
        )
        .then((res) => {
          sessionStorage.setItem('allMovies', JSON.stringify(res));
          return res;
        });
    }
    return Promise.resolve(JSON.parse(sessionStorage.allMovies));
  }

  function handleSearch() {
    sessionStorage.setItem('requestAllMovies', request);
    sessionStorage.setItem('cardsNumber', screenParams.init);
    setCardsNumber(screenParams.init);
    return getAllMovies()
      .then((res) => filterOnRequest(request, res))
      .then((res) => {
        sessionStorage.setItem('resultAllMovies', JSON.stringify(res));
        setResult(res);
        return res;
      });
  }

  function handleShowMore() {
    const newNumber = cardsNumber + screenParams.add;
    setCardsNumber(newNumber);
    sessionStorage.setItem('cardsNumber', newNumber);
  }

  return (
    <Movies
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      buttonType="bookmark"
      onSearch={handleSearch}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      request={request}
      setRequest={setRequest}
      filter={filter}
      setFilter={setFilter}
      movies={movies}
      showMore={handleShowMore}
      cardsNumber={cardsNumber}
      isSearchDisabled={isSearchDisabled}
      setIsSearchDisabled={setIsSearchDisabled}
      bookmarkedMovies={bookmarkedMovies}
      setBookmarkedMovies={setBookmarkedMovies}
    />
  );
}
