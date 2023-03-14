import React from 'react';
import imagePath from '../../images/about.jpg';
import imagePathHD from '../../images/aboutHD.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section
      id='about-me'
      className='about-me main__section'
    >
      <h2 className='main__section-title'>Студент</h2>
      <div className='about-me__profile'>
        <img
          src={imagePath}
          srcset={`${imagePathHD} 2x`}
          alt='Фотография Семена'
          className='about-me__image'
        />
        <article className='about-me__article'>
          <h3 className='about-me__title'>Семен</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
