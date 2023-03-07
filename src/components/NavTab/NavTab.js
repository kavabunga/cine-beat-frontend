import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__element'>
          <button
            type='button'
            className='nav-tab__button app__button'
          >
            О проекте
          </button>
        </li>
        <li className='nav-tab__element'>
          <button
            type='button'
            className='nav-tab__button app__button'
          >
            Технологии
          </button>
        </li>
        <li className='nav-tab__element'>
          <button
            type='button'
            className='nav-tab__button app__button'
          >
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
}
