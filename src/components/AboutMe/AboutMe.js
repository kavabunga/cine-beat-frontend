import React from 'react';
import imagePath from '../../images/about.jpg';
import imagePathHD from '../../images/aboutHD.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id='about-me' className='about-me main__section'>
      <h2 className='main__section-title'>Student</h2>
      <div className='about-me__profile'>
        <img
          src={imagePath}
          srcSet={`${imagePathHD} 2x`}
          alt='Semyon Katz portrait'
          className='about-me__image'
        />
        <article className='about-me__article'>
          <h3 className='about-me__title'>Semyon Katz</h3>
          <p className='about-me__subtitle'>Frontend Developer, 36 yrs.</p>
          <p className='about-me__text'>
            For many years I worked as a professional photographer. Some time
            ago I realized that web dev excites me much more. That led me to the
            Practicum course. I was interested in web, design and technology for
            years. I read WIRED and TLDR, I love Apple's product landings, watch
            SpaceX news and check Reddit dev and tech communities. Also I have a
            guilty pleasure of organizing stuff and I love tools for this like
            Notion, Google Apps etc. Using those I built a workflow for my
            photography work and digitalized processes at kids NGO, which I'm
            volunteering for since school.
          </p>
          <a
            href='https://github.com/kavabunga'
            target='_blank'
            rel='noopener noreferrer'
            className='about-me__link app__link'
          >
            GitHub
          </a>
        </article>
      </div>
    </section>
  );
}
