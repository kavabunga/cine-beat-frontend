import React from 'react';
import Logo from '../Logo/Logo';
import './CredentialsScreen.css';

export default function CredentialsScreen({
  title,
  submitButtonText,
  onSubmit,
  extra,
  children,
}) {
  return (
    <main className='credentials-screen'>
      <div className='credentials-screen__title-container'>
        <Logo />
        <h1 className='credentials-screen__title'>{title}</h1>
      </div>
      <form
        onSubmit={onSubmit}
        className='credentials-screen__form'
      >
        <fieldset className='credentials-screen__inputs'>{children}</fieldset>
        <button
          className='credentials-screen__submit-button credentials-screen__submit-button_active app__button'
          type='submit'
        >
          {submitButtonText}
        </button>
      </form>
      <p className='credentials-screen__extra'>
        {extra.text}{' '}
        <a
          className='credentials-screen__auth-link app__link'
          href={extra.link}
        >
          {extra.name}
        </a>
      </p>
    </main>
  );
}
