import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardsList.css';

export default function MoviesCardsList({
  cards,
  cardsNumber,
  buttonType,
  bookmarkedMovies,
  bookmark,
  unBookmark,
  setInfoMessage,
}) {
  return (
    <ul className='movies-cards-list'>
      {cards &&
        cards.slice(0, cardsNumber).map((element) => (
          <MovieCard
            content={element}
            buttonType={buttonType}
            key={element.movieId}
            bookmarkedMovies={bookmarkedMovies}
            bookmark={bookmark}
            unBookmark={unBookmark}
            setInfoMessage={setInfoMessage}
          />
        ))}
    </ul>
  );
}
