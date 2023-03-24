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
      message: null,
      type: null,
    });
  }
  function handleChangeCheckbox(e) {
    setFilter(e.target.checked);
    setInfoMessage({
      message: null,
      type: null,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    request
      ? onSubmit()
      : setInfoMessage({
          message: 'Нужно ввести ключевое слово',
          type: 'error',
        });
  }

  return (
    <form
      className='search-form'
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className='search-form__search'>
        <input
          className='search-form__input'
          value={request}
          name='text'
          type='text'
          placeholder='Фильм'
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
        <label className='search-form__filter-name'>Короткометражки</label>
      </fieldset>
    </form>
  );
}
