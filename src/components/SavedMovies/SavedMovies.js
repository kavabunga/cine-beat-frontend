import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import Movies from '../Movies/Movies';

export default function SavedMovies({ isLoaded }) {
  const user = React.useContext(UserContext);
  const cards = [
    {
      _id: '64011727375178fe22e2c03e',
      duration: 102,
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2918&amp;q=80',
      trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80',
      owner: {
        _id: '64010ca62380ae8f90a18f0a',
        email: 'test11@test.com',
        name: 'Квентин Т.',
        __v: 0,
      },
      nameRU: 'Тест два',
      bookmarked: true,
    },
    {
      _id: '64011727375178fe22e2c02e',
      duration: 102,
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2918&amp;q=80',
      trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80',
      owner: {
        _id: '64010ca62380ae8f90a18f0a',
        email: 'test11@test.com',
        name: 'Квентин Т.',
        __v: 0,
      },
      nameRU: 'Тест три',
      bookmarked: false,
    },

    {
      _id: '64011727375178fe22e2c15e',
      duration: 102,
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2918&amp;q=80',
      trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80',
      owner: {
        _id: '64010ca62380ae8f90a18f0a',
        email: 'test11@test.com',
        name: 'Квентин Т.',
        __v: 0,
      },
      nameRU: 'Тест шесть',
      bookmarked: false,
    },
  ];

  return (
    <Movies
      cards={cards}
      isLoaded={isLoaded}
      buttonType='delete'
    />
  );
}
