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
          srcSet={`${imagePathHD} 2x`}
          alt='Фотография Семена'
          className='about-me__image'
        />
        <article className='about-me__article'>
          <h3 className='about-me__title'>Семён Кац</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__text'>
            Я закончил факультет радиосвязи МТУСИ, а после учебы начал
            развиваться в профессиональной фотографии. С тех пор я сделал
            множество съемок для Forbes и других клиентов. Недавно я погрузился
            в веб-разработку и начал курс в Яндекс.Практикуме. Меня всегда
            интересовали новые технологии и веб, я читаю WIRED, TLDR, люблю
            изучать лендинги новых продуктов Apple. Сейчас я заканчиваю учебу и
            планирую разделить свое время на работу с фотографией и вебом.
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
