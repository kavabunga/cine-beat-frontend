import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <Link
      className='logo app__link'
      to='/'
    >
      <img
        className='logo__icon'
        src={logoPath}
        alt='Логотип проекта'
      />
    </Link>
  );
}
