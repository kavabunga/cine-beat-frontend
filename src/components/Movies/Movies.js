import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = React.memo(
  ({
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
    onCheckbox,
  }) => {
    function handleSearchSubmit() {
      setIsLoading(true);
      onSearch()
        .then((res) => {
          res.length === 0 &&
            setInfoMessage({
              message: 'Ничего не найдено',
              type: 'info',
            });
        })
        .catch(() => {
          setInfoMessage({
            message:
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
            type: 'error',
          });
        })
        .finally(() => setIsLoading(false));
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
              />
            )}
            {movies && movies.length > cardsNumber ? (
              <button
                className='movies__show-more-button app__button'
                type='button'
                onClick={showMore}
              >
                Ещё
              </button>
            ) : (
              <div className='movies__spacer' />
            )}
          </section>
        )}
      </main>
    );
  }
);

export default Movies;
