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
      message: null,
      type: null,
    });
  }, [setInfoMessage]);

  React.useEffect(() => {
    user !== null && setValues(user);
  }, [user]);

  function handleFieldChange(e) {
    handleChange(e);
    infoMessage &&
      setInfoMessage({
        message: null,
        type: null,
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет{user ? ', ' + user.name : ''}!</h1>
      <form
        onSubmit={handleSubmit}
        className='profile__form'
      >
        <fieldset className='profile__inputs'>
          <label className='profile__label'>
            Имя
            <input
              type='text'
              value={values.name}
              name='name'
              pattern='/^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺh-]+$/umi'
              required
              onChange={handleFieldChange}
              className='profile__input'
            />
          </label>

          <label className='profile__label'>
            E-mail
            <input
              type='email'
              value={values.email}
              name='email'
              required
              onChange={handleFieldChange}
              className='profile__input'
            />
          </label>
        </fieldset>
        <ApiInfo
          message={infoMessage.message}
          type={infoMessage.type}
        />
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
          Редактировать
        </button>
        <button
          className='profile__button profile__button_type_logout app__button'
          type='button'
          onClick={onSignout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}
