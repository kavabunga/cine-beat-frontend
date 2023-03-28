import React from 'react';
import { filterOnRequest, filterOnDuration } from '../../utils/helpers';
import mainApi from '../../utils/MainApi';
import Movies from '../Movies/Movies';

export default function SavedMovies({
  isLoading,
  setIsLoading,
  infoMessage,
  setInfoMessage,
  bookmarkedMovies,
  setBookmarkedMovies,
}) {
  const [cardsNumber, setCardsNumber] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [request, setRequest] = React.useState('');
  const [filter, setFilter] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [isSearchDisabled, setIsSearchDisabled] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        if (res.length > 0) {
          setInfoMessage({
            message: '',
            type: '',
          });
          setCardsNumber(res.length);
          setResult(res);
        } else {
          setIsSearchDisabled(true);
          setInfoMessage({
            message: 'Ничего не найдено. Здесь появятся отмеченные фильмы',
            type: 'info',
          });
        }
      })
      .catch((err) => {
        setInfoMessage({
          message: err.message,
          type: 'error',
        });
      })
      .finally(() => setIsLoading(false));
  }, [setInfoMessage, setIsLoading]);

  React.useEffect(() => {
    result && setMovies(filterOnDuration(filter, result));
  }, [filter, result]);

  React.useEffect(() => {
    request ? handleSearch() : setResult(bookmarkedMovies);
  }, [bookmarkedMovies]);

  function getMovies() {
    if (!bookmarkedMovies) {
      return mainApi.getBookmarkedMovies().then((res) => {
        setBookmarkedMovies(res);
        return res;
      });
    }
    return Promise.resolve(bookmarkedMovies);
  }

  function handleSearch() {
    return Promise.resolve(filterOnRequest(request, bookmarkedMovies)).then(
      (res) => {
        setResult(res);
        return res;
      }
    );
  }

  return (
    <Movies
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      buttonType='delete'
      onSearch={handleSearch}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      request={request}
      setRequest={setRequest}
      filter={filter}
      setFilter={setFilter}
      movies={movies}
      cardsNumber={cardsNumber}
      isSearchDisabled={isSearchDisabled}
      setIsSearchDisabled={setIsSearchDisabled}
      bookmarkedMovies={bookmarkedMovies}
      setBookmarkedMovies={setBookmarkedMovies}
    />
  );
}
