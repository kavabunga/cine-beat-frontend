import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardsList.css';

export default function MoviesCardsList({ cards, cardsNumber, buttonType }) {
  return (
    <ul className='movies-cards-list'>
      {cards &&
        cards.slice(0, cardsNumber).map((element) => (
          <MovieCard
            content={element}
            buttonType={buttonType}
            key={element.id}
          />
        ))}
    </ul>
  );
}
