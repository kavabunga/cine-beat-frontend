import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__element'>
          <a
            className='nav-tab__link app__link'
            href='#about-project'
          >
            О проекте
          </a>
        </li>
        <li className='nav-tab__element'>
          <a
            className='nav-tab__link app__link'
            href='#techs'
          >
            Технологии
          </a>
        </li>
        <li className='nav-tab__element'>
          <a
            className='nav-tab__link app__link'
            href='#about-me'
          >
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}
