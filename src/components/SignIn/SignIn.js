import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';

export default function SignIn({
  onSubmit,
  isSubmitting,
  infoMessage,
  setInfoMessage,
}) {
  const inputs = [
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
    },
  ];

  const extra = {
    text: 'Ещё не зарегистрированы?',
    name: 'Регистрация',
    link: '/signup',
  };

  return (
    <CredentialsScreen
      title='Рады видеть!'
      submitButtonText='Войти'
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      extra={extra}
      inputs={inputs}
    />
  );
}
