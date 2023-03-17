import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardsList.css';

export default function MoviesCardsList({ cards, buttonType }) {
  return (
    <ul className='movies-cards-list'>
      {cards &&
        cards.map((element) => {
          return (
            <MovieCard
              content={element}
              buttonType={buttonType}
              key={element._id}
            />
          );
        })}
    </ul>
  );
}
