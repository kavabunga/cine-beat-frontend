import React from 'react';
import NavTab from '../NavTab/NavTab';

import './Promo.css';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__banner'>
        <h1 className='promo__title'>
          Final project of the web-development course student
        </h1>
        <NavTab />
      </div>
    </section>
  );
}
