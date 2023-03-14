import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';

export default function SignIn() {
  const inputs = [
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
    text: 'Ещё не зарегистрированы?',
    name: 'Регистрация',
    link: 'https://ya.ru',
  };

  return (
    <CredentialsScreen
      title='Рады видеть!'
      submitButtonText='Войти'
      extra={extra}
      inputs={inputs}
    />
  );
}
