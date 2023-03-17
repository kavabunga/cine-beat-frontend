import React from 'react';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import './CredentialsScreen.css';
import ApiError from '../ApiError/ApiError';
import { Link } from 'react-router-dom';

export default function CredentialsScreen({
  title,
  submitButtonText,
  extra,
  inputs,
}) {
  const [credentials, setCredentials] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit: ', credentials);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }

  return (
    <main className='credentials-screen'>
      <div className='credentials-screen__title-container'>
        <Logo />
        <h1 className='credentials-screen__title'>{title}</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className='credentials-screen__form'
      >
        <fieldset className='credentials-screen__inputs'>
          {inputs &&
            inputs.map((input) => (
              <Input
                label={input.label}
                value={
                  credentials && credentials[input.name]
                    ? credentials[input.name]
                    : ''
                }
                name={input.name}
                type={input.type}
                onChange={handleChange}
                errorMessage={input.errorMessage}
                key={input.name}
              />
            ))}
        </fieldset>
        <ApiError message='' />
        <button
          className='credentials-screen__submit-button credentials-screen__submit-button_active app__button'
          type='submit'
        >
          {submitButtonText}
        </button>
      </form>
      <p className='credentials-screen__extra'>
        {extra.text}{' '}
        <Link
          className='credentials-screen__auth-link app__link'
          to={extra.link}
        >
          {extra.name}
        </Link>
      </p>
    </main>
  );
}
