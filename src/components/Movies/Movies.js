import React from 'react';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies() {
  const cards = [
    {
      _id: '64011727375178fe22e2c05e',
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
      nameRU: 'Тест один',
      bookmarked: false,
    },
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
      _id: '64011727375178fe22e2c01e',
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
      nameRU: 'Тест четыре',
      bookmarked: false,
    },
    {
      _id: '64011727375178fe22e2c00e',
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
      nameRU: 'Тест пять',
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
    <main className='movies'>
      <section className='movies__section movies__search-form'>
        <SearchForm />
      </section>
      <section className='movies__section'>
        <MoviesCardsList
          cards={cards}
          buttonType='bookmark'
        />
      </section>
    </main>
  );
}
