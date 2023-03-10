import React from 'react';
import { calculateDuration } from '../../utils/helpers';
import CardBookmarkButton from '../CardBookmarkButton/CardBookmarkButton';
import CardDeleteButton from '../CardDeleteButton/CardDeleteButton';
import './MovieCard.css';

export default function MovieCard({ content, onClick, buttonType }) {
  const [isActive, setIsActive] = React.useState(content.bookmarked);

  function handleBookmark() {
    setIsActive(!isActive);
  }

  return (
    <li className='movie-card'>
      <div className='movie-card__container'>
        <article className='movie-card__description'>
          <h2 className='movie-card__title'>{content.nameRU}</h2>
          <p className='movie-card__duration'>
            {calculateDuration(content.duration)}
          </p>
        </article>
        {buttonType === 'bookmark' && (
          <CardBookmarkButton
            onClick={handleBookmark}
            isActive={isActive}
          />
        )}
        {buttonType === 'delete' && <CardDeleteButton onClick={onClick} />}
      </div>
      <img
        src={content.image}
        alt={`Обложка фильма ${content.nameRU}`}
        className='movie-card__image'
      />
    </li>
  );
}
