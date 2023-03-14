import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__bottom-container'>
        <ul className='footer__list'>
          <li className='footer__element'>
            <a
              className='footer__link app__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__element'>
            <a
              className='footer__link app__link'
              href='https://github.com/kavabunga'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
        <p className='footer__date'>&copy; 2023</p>
      </div>
    </footer>
  );
}
