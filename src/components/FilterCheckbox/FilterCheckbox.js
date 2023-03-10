import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ isChecked, onCheck, name }) {
  return (
    <label className='filter-checkbox'>
      <input
        type='checkbox'
        name={name}
        className='filter-checkbox__invisible-checkbox'
        checked={isChecked}
        onChange={onCheck}
      />
      <div className='filter-checkbox__visible-checkbox' />
    </label>
  );
}
