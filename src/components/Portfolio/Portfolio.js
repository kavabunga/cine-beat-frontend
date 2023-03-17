import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__element'>
          <a
            href='https://smooth-goldfish.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link app__link'
          >
            Статичный сайт
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            href='https://hypnotic-toe.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link app__link'
          >
            Адаптивный сайт
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            href='https://kavabunga.github.io/mesto/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link app__link'
          >
            Одностраничное приложение
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
