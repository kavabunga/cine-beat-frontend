import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies({ cards, isLoaded, buttonType }) {
  function showMore() {
    console.log('show more fired');
  }

  return (
    <main className='movies'>
      <section className='movies__section movies__search-form'>
        <SearchForm />
      </section>
      {isLoaded ? (
        <section className='movies__section'>
          <MoviesCardsList
            cards={cards}
            buttonType={buttonType}
          />
          {cards.length > 3 ? (
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
      ) : (
        <Preloader />
      )}
    </main>
  );
}
