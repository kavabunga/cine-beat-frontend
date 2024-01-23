import React from 'react';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies({
  isLoading,
  setIsLoading,
  buttonType,
  onSearch,
  request,
  setRequest,
  filter,
  setFilter,
  movies,
  infoMessage,
  setInfoMessage,
  showMore,
  cardsNumber,
  isSearchDisabled,
  setIsSearchDisabled,
  bookmarkedMovies,
  setBookmarkedMovies,
}) {
  function handleSearchSubmit() {
    setIsLoading(true);
    setIsSearchDisabled(true);
    onSearch()
      .then((res) => {
        res.length === 0 &&
          setInfoMessage({
            message: 'Nothing found',
            type: 'info',
          });
      })
      .catch(() => {
        setInfoMessage({
          message:
            'An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a moment and try again',
          type: 'error',
        });
      })
      .finally(() => {
        setIsLoading(false);
        setIsSearchDisabled(false);
      });
  }

  function bookmarkMovie(movie) {
    return mainApi
      .postBookmarkedMovie(movie)
      .then((res) => setBookmarkedMovies([...bookmarkedMovies, res]));
  }

  function unBookmarkMovie(movie) {
    const { movieId } = movie;
    return Promise.resolve(bookmarkedMovies.find((e) => e.movieId === movieId))
      .then((res) =>
        res !== undefined && res._id
          ? res._id
          : Promise.reject(new Error('Failed to remove movie from bookmarks')),
      )
      .then((res) => mainApi.deleteBookmarkedMovie(res))
      .then((res) =>
        setBookmarkedMovies((state) => state.filter((c) => c._id !== res._id)),
      );
  }

  return (
    <main className='movies'>
      <section className='movies__section movies__search-form'>
        <SearchForm
          request={request}
          setRequest={setRequest}
          filter={filter}
          setFilter={setFilter}
          onSubmit={handleSearchSubmit}
          setInfoMessage={setInfoMessage}
          isDisabled={isSearchDisabled}
        />
      </section>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className='movies__section'>
          {infoMessage.message && (
            <div className='movies__info-container'>
              <p
                className={`movies__info-text movies__info-text_type_${infoMessage.type}`}
              >
                {infoMessage.message}
              </p>
            </div>
          )}
          {movies && (
            <MoviesCardsList
              cards={movies}
              buttonType={buttonType}
              cardsNumber={cardsNumber}
              bookmarkedMovies={bookmarkedMovies}
              bookmark={bookmarkMovie}
              unBookmark={unBookmarkMovie}
              setInfoMessage={setInfoMessage}
            />
          )}
          {movies && movies.length > cardsNumber ? (
            <button
              className='movies__show-more-button app__button'
              type='button'
              onClick={showMore}
            >
              More
            </button>
          ) : (
            <div className='movies__spacer' />
          )}
        </section>
      )}
    </main>
  );
}
