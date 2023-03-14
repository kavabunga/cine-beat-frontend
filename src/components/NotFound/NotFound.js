import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button
          className='not-found__back-button app__button'
          type='button'
          onClick={goBack}
        >
          Назад
        </button>
      </div>
    </main>
  );
}
