import React from 'react';
import logoPath from '../../images/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <img
      className='logo'
      src={logoPath}
      alt='Логотип проекта'
    />
  );
}
