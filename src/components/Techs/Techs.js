import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs main__section'>
      <h2 className='main__section-title'>Технологии</h2>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__element'>
          <p className='techs__tech'>HTML</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>CSS</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>JS</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>React</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>Git</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>Express.js</p>
        </li>
        <li className='techs__element'>
          <p className='techs__tech'>mongoDB</p>
        </li>
      </ul>
    </section>
  );
}
