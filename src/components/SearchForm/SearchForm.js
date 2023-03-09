import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  const [isCheckedShorts, setIsCheckedShorts] = React.useState(false);

  function onCheckShorts() {
    console.log('checker fired');
    setIsCheckedShorts(!isCheckedShorts);
  }

  return (
    <form className='search-form'>
      <fieldset className='search-form__search'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          required
          onChange={() => {
            console.log('input type catched');
          }}
        />
        <button
          type='submit'
          className='search-form__submit-button app__button'
        ></button>
      </fieldset>
      <fieldset className='search-form__filter'>
        <FilterCheckbox
          isChecked={isCheckedShorts}
          onCheck={onCheckShorts}
        />
        <label className='search-form__filter-name'>Короткометражки</label>
      </fieldset>
    </form>
  );
}
