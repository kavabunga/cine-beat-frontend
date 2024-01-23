import React from 'react';
import './Techs.css';

const techItems = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

export default function Techs() {
  return (
    <section id='techs' className='techs main__section'>
      <h2 className='main__section-title'>Tech stack</h2>
      <h3 className='techs__title'>7 technologies</h3>
      <p className='techs__text'>
        During the web development course, we mastered the technologies that we
        used in our graduation project.
      </p>
      <ul className='techs__list'>
        {techItems.map((item) => (
          <li className='techs__element' key={item}>
            <p className='techs__tech'>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
