import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section id='about-project' className='about-project main__section'>
      <h2 className='main__section-title'>About</h2>
      <ul className='about-project__cards'>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>
            Diploma project consists of 5&nbsp;stages
          </h3>
          <p className='about-project__card-text'>
            Planing, backend development and deploy, frontend layout coding,
            frontend logic development and application deploy, bug fixes and
            refactoring according to review comments.
          </p>
        </li>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>
            It took 5&nbsp;weeks to complete the project.
          </h3>
          <p className='about-project__card-text'>
            Each stage had a soft and hard deadline that had to be met in order
            to successfully finish the project.
          </p>
        </li>
      </ul>
      <ul className='about-project__timeline'>
        <li className='about-project__stage-1'>
          <p className='about-project__stage-term about-project__stage-term_highlight'>
            1 week
          </p>
          <p className='about-project__stage-caption'>Backend</p>
        </li>
        <li className='about-project__stage-2'>
          <p className='about-project__stage-term'>4 weeks</p>
          <p className='about-project__stage-caption'>Frontend</p>
        </li>
      </ul>
    </section>
  );
}
