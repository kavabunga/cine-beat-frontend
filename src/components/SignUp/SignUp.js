import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';

export default function SignUp() {
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
    link: 'https://ya.ru',
  };

  return (
    <CredentialsScreen
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      extra={extra}
      inputs={inputs}
    />
  );
}
