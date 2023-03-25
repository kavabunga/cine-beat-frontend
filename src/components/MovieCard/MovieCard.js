import React from 'react';
import { calculateDuration } from '../../utils/helpers';
import CardBookmarkButton from '../CardBookmarkButton/CardBookmarkButton';
import CardDeleteButton from '../CardDeleteButton/CardDeleteButton';
import './MovieCard.css';

export default function MovieCard({
  content,
  buttonType,
  bookmarkedMovies,
  bookmark,
  unBookmark,
  setInfoMessage,
}) {
  const isBookmarked = bookmarkedMovies.some(
    (e) => e.movieId === content.movieId
  );
  const [isCardButtonDisabled, setIsCardButtonDisabled] = React.useState(false);

  function handleButtonClick(e) {
    e.preventDefault();
    setIsCardButtonDisabled(true);
    if (buttonType === 'bookmark' && !isBookmarked) {
      bookmark(content)
        .catch((err) => {
          setInfoMessage({
            message: err.message,
            type: 'error',
          });
        })
        .finally(() => setIsCardButtonDisabled(false));
    } else {
      unBookmark(content)
        .catch((err) => {
          console.log(err);
          setInfoMessage({
            message: err.message,
            type: 'error',
          });
        })
        .finally(() => setIsCardButtonDisabled(false));
    }
  }

  return (
    <li className='movie-card'>
      <a
        href={content.trailerLink}
        target='_blank'
        rel='noopener noreferrer'
        className='movie-card__link app__link'
      >
        <div className='movie-card__container'>
          <article className='movie-card__description'>
            <h2 className='movie-card__title'>{content.nameRU}</h2>
            <p className='movie-card__duration'>
              {calculateDuration(content.duration)}
            </p>
          </article>
          {buttonType === 'bookmark' && (
            <CardBookmarkButton
              onClick={handleButtonClick}
              isActive={isBookmarked}
              isDisabled={isCardButtonDisabled}
            />
          )}
          {buttonType === 'delete' && (
            <CardDeleteButton
              onClick={handleButtonClick}
              isDisabled={isCardButtonDisabled}
            />
          )}
        </div>
        <img
          src={content.image}
          alt={`Обложка фильма ${content.nameRU}`}
          className='movie-card__image'
        />
      </a>
    </li>
  );
}
