import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__element'>
          <a
            href='https://smooth-goldfish.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link app__link'
          >
            Static website
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
            Adaptive website
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            href='https://igoplaces.semenkatz.com'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link app__link'
          >
            SPA
            <span className='portfolio__icon'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
