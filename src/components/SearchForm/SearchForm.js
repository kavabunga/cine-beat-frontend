import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({
  onSubmit,
  request,
  setRequest,
  filter,
  setFilter,
  setInfoMessage,
  isDisabled,
}) {
  function handleChangeInput(e) {
    setRequest(e.target.value);
    setInfoMessage({
      message: '',
      type: '',
    });
  }
  function handleChangeCheckbox(e) {
    setFilter(e.target.checked);
    setInfoMessage({
      message: '',
      type: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    request
      ? onSubmit()
      : setInfoMessage({
          message: 'You need to enter a keyword',
          type: 'error',
        });
  }

  return (
    <form className='search-form' onSubmit={handleSubmit} noValidate>
      <fieldset className='search-form__search'>
        <input
          className='search-form__input'
          value={request}
          name='text'
          type='text'
          placeholder='Movie'
          required
          onChange={handleChangeInput}
        />
        <button
          type='submit'
          className={`search-form__submit-button ${
            isDisabled ? 'search-form__submit-button_disabled' : ''
          }`}
          disabled={isDisabled}
        />
      </fieldset>
      <fieldset className='search-form__filter'>
        <FilterCheckbox
          isChecked={filter}
          onCheck={handleChangeCheckbox}
          name='filterShorts'
        />
        <label className='search-form__filter-name'>Shorts</label>
      </fieldset>
    </form>
  );
}
