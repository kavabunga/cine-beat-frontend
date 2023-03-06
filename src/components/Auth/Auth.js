import React from 'react';
import './Auth.css';

export default function Auth() {
  return (
    <ul className='auth'>
      <li className='auth__element'>
        <a
          className='auth__link app__link'
          onClick=''
          href='https://ya.ru'
        >
          Регистрация
        </a>
      </li>
      <li className='auth__element'>
        <a
          className='auth__link auth__link_type_login app__link'
          onClick=''
          href='https://ya.ru'
        >
          Войти
        </a>
      </li>
    </ul>
  );
}
