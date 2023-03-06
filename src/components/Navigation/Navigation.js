import React from 'react';
import './Navigation.css';

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <button
        className='navigation__close-button app__button'
        type='button'
        onClick={() => setIsOpen(false)}
      />
      <ul className='navigation__list'>
        <li className='navigation__element navigation__element_type_main'>
          <a
            className='navigation__link app__link'
            onClick=''
            href='https://ya.ru'
          >
            Главная
          </a>
        </li>
        <li className='navigation__element'>
          <a
            className='navigation__link app__link navigation__link_active'
            onClick=''
            href='https://ya.ru'
          >
            Фильмы
          </a>
        </li>
        <li className='navigation__element'>
          <a
            className='navigation__link app__link'
            onClick=''
            href='https://ya.ru'
          >
            Сохраненные фильмы
          </a>
        </li>
      </ul>
      <a
        className='navigation__link navigation__link_type_profile app__link'
        onClick=''
        href='https://ya.ru'
      >
        Аккаунт
      </a>
    </nav>
  );
}
