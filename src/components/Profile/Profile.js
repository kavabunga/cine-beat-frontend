import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import ApiError from '../ApiError/ApiError';
import './Profile.css';

export default function Profile({ onSubmit }) {
  const user = React.useContext(UserContext);
  const [input, setInput] = React.useState(user);

  function handleChangeInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {user.name}!</h1>
      <form
        onSubmit={handleSubmit}
        className='profile__form'
      >
        <fieldset className='profile__inputs'>
          <label className='profile__label'>
            Имя
            <input
              type='text'
              value={input.name}
              name='name'
              required
              onChange={handleChangeInput}
              className='profile__input'
            />
          </label>

          <label className='profile__label'>
            E-mail
            <input
              type='text'
              value={input.email}
              name='email'
              required
              onChange={handleChangeInput}
              className='profile__input'
            />
          </label>
        </fieldset>
        <ApiError message='' />
        <button
          className='profile__button profile__button_active app__button'
          type='submit'
        >
          Редактировать
        </button>
        <button
          className='profile__button profile__button_type_logout app__button'
          type='button'
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}
