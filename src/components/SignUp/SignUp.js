import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';

export default function SignUp({ onSubmit, infoMessage, setInfoMessage }) {
  const inputs = [
    {
      label: 'Имя',
      name: 'name',
      type: 'text',
      errorMessage: '',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'text',
      errorMessage: '',
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      errorMessage: 'Что-то пошло не так...',
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
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      extra={extra}
      inputs={inputs}
    />
  );
}
