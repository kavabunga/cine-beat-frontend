import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section
      id='about-project'
      className='about-project main__section'
    >
      <h2 className='main__section-title'>О проекте</h2>
      <ul className='about-project__cards'>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className='about-project__card-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className='about-project__card-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about-project__timeline'>
        <li className='about-project__stage-1'>
          <p className='about-project__stage-term about-project__stage-term_highlight'>
            1 неделя
          </p>
          <p className='about-project__stage-caption'>Back-end</p>
        </li>
        <li className='about-project__stage-2'>
          <p className='about-project__stage-term'>4 недели</p>
          <p className='about-project__stage-caption'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}
