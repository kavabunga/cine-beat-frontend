import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies() {
  return (
    <main className='movies'>
      <section className='movies__section movies__search-form'>
        <SearchForm />
      </section>
    </main>
  );
}
