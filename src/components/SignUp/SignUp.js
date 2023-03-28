import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';

export default function SignUp({
  onSubmit,
  isSubmitting,
  infoMessage,
  setInfoMessage,
}) {
  const inputs = [
    {
      label: 'Имя',
      name: 'name',
      type: 'text',
      pattern: '[- А-Яа-яA-Za-zё]+$',
    },
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
    text: 'Уже зарегистрированы?',
    name: 'Войти',
    link: '/signin',
  };

  return (
    <CredentialsScreen
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      extra={extra}
      inputs={inputs}
    />
  );
}
