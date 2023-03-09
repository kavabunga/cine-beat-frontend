import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ isChecked, onCheck }) {
  return (
    <label className='filter-checkbox'>
      <input
        type='checkbox'
        className='filter-checkbox__invisible-checkbox'
        defaultChecked={isChecked}
        onChange={onCheck}
      />
      <div className='filter-checkbox__visible-checkbox app__button' />
    </label>
  );
}
