import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  const [searchRequest, setSearchRequest] = React.useState({
    text: '',
    filterShorts: false,
  });

  function handleChangeInput(e) {
    setSearchRequest({ ...searchRequest, [e.target.name]: e.target.value });
  }
  function handleChangeCheckbox(e) {
    setSearchRequest({ ...searchRequest, [e.target.name]: e.target.checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchRequest);
  }

  return (
    <form
      className='search-form'
      onSubmit={handleSubmit}
    >
      <fieldset className='search-form__search'>
        <input
          className='search-form__input'
          value={searchRequest.text}
          name='text'
          type='text'
          placeholder='Фильм'
          required
          onChange={handleChangeInput}
        />
        <button
          type='submit'
          className='search-form__submit-button app__button'
        ></button>
      </fieldset>
      <fieldset className='search-form__filter'>
        <FilterCheckbox
          isChecked={searchRequest.filterShorts}
          onCheck={handleChangeCheckbox}
          name='filterShorts'
        />
        <label className='search-form__filter-name'>Короткометражки</label>
      </fieldset>
    </form>
  );
}
