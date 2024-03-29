import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import useForm from '../../utils/useForm';
import ApiInfo from '../ApiInfo/ApiInfo';
import './Profile.css';

export default function Profile({
  onSubmit,
  isSubmitting,
  onSignout,
  infoMessage,
  setInfoMessage,
}) {
  const user = React.useContext(UserContext);
  const { values, handleChange, errors, isValid, setValues } = useForm();

  React.useEffect(() => {
    setInfoMessage({
      message: '',
      type: '',
    });
  }, [setInfoMessage]);

  React.useEffect(() => {
    user && user.email && setValues(user);
  }, [user, setValues]);

  function handleFieldChange(e) {
    handleChange(e);
    infoMessage &&
      setInfoMessage({
        message: '',
        type: '',
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>
        Hey{user.name ? ', ' + user.name : ''}!
      </h1>
      <form onSubmit={handleSubmit} className='profile__form'>
        <fieldset className='profile__inputs'>
          <label className='profile__label'>
            Name
            <input
              type='text'
              value={values.name || ''}
              name='name'
              pattern='[А-Яа-яA-Za-zёЁ]+$'
              required
              onChange={handleFieldChange}
              className={`profile__input ${
                errors.name ? 'profile__input_error' : ''
              }`}
            />
          </label>

          <label className='profile__label'>
            Email
            <input
              type='email'
              value={values.email || ''}
              name='email'
              required
              onChange={handleFieldChange}
              className={`profile__input ${
                errors.email ? 'profile__input_error' : ''
              }`}
            />
          </label>
          {errors.name && (
            <span className='profile__error'>Error in name. {errors.name}</span>
          )}
          {errors.email && (
            <span className='profile__error'>
              Error in email. {errors.email}
            </span>
          )}
        </fieldset>
        <ApiInfo message={infoMessage.message} type={infoMessage.type} />
        <button
          className={`profile__button ${
            !isSubmitting &&
            isValid &&
            (values.name !== user.name || values.email !== user.email) &&
            'profile__button_active'
          }`}
          type='submit'
          disabled={
            isSubmitting ||
            !isValid ||
            !(values.name !== user.name || values.email !== user.email)
          }
        >
          {isSubmitting ? 'Processing...' : 'Edit'}
        </button>
        <button
          className='profile__button profile__button_type_logout app__button'
          type='button'
          onClick={onSignout}
        >
          Logout
        </button>
      </form>
    </main>
  );
}
