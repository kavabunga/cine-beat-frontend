import React from 'react';
import './Hamburger.css';

export default function Hamburger({ setIsOpen }) {
  return (
    <button
      className='hamburger app__button'
      type='button'
      onClick={() => setIsOpen(true)}
    />
  );
}
