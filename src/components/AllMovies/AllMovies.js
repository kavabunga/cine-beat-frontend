import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { filterOnRequest, filterOnDuration } from '../../utils/helpers';
import moviesApi from '../../utils/MoviesApi';
import Movies from '../Movies/Movies';

export default function AllMovies({
  isLoading,
  setIsLoading,
  infoMessage,
  setInfoMessage,
  screenParams,
}) {
  const [cardsNumber, setCardsNumber] = React.useState(
    sessionStorage.getItem('cardsNumber')
      ? Number(sessionStorage.cardsNumber)
      : screenParams.init
  );
  const [request, setRequest] = React.useState(
    sessionStorage.getItem('requestAllMovies')
      ? sessionStorage.requestAllMovies
      : ''
  );
  const [filter, setFilter] = React.useState(
    sessionStorage.getItem('filterAllMovies')
      ? JSON.parse(sessionStorage.filterAllMovies)
      : false
  );
  const [result, setResult] = React.useState(
    sessionStorage.getItem('resultAllMovies')
      ? JSON.parse(sessionStorage.resultAllMovies)
      : null
  );
  const [movies, setMovies] = React.useState(null);

  React.useEffect(() => {
    sessionStorage.setItem('filterAllMovies', JSON.stringify(filter));
    result && setMovies(filterOnDuration(filter, result));
  }, [filter, result]);

  function getAllMovies() {
    if (!sessionStorage.getItem('allMovies')) {
      return moviesApi.getMovies().then((res) => {
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
      buttonType='bookmark'
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
    />
  );
}
