import React from 'react';
import useForm from '../../utils/useForm';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import './CredentialsScreen.css';
import ApiInfo from '../ApiInfo/ApiInfo';
import { Link } from 'react-router-dom';

export default function CredentialsScreen({
  title,
  submitButtonText,
  onSubmit,
  isSubmitting,
  infoMessage,
  setInfoMessage,
  extra,
  inputs,
}) {
  const { values, handleChange, errors, isValid } = useForm();

  React.useEffect(() => {
    setInfoMessage({
      message: '',
      type: '',
    });
  }, [setInfoMessage]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  function handleFieldChange(e) {
    handleChange(e);
    infoMessage &&
      setInfoMessage({
        message: '',
        type: '',
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
        noValidate
      >
        <fieldset className='credentials-screen__inputs'>
          {inputs &&
            inputs.map((input) => (
              <Input
                label={input.label}
                value={values && values[input.name] ? values[input.name] : ''}
                name={input.name}
                type={input.type}
                pattern={input.pattern}
                onChange={handleFieldChange}
                errorMessage={errors[input.name]}
                key={input.name}
              />
            ))}
        </fieldset>
        <ApiInfo message={infoMessage.message} type={infoMessage.type} />
        <button
          className={`credentials-screen__submit-button ${
            !isSubmitting &&
            isValid &&
            'credentials-screen__submit-button_active'
          }`}
          type='submit'
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? 'Processing...' : submitButtonText}
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
