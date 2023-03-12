import React from 'react';
import CredentialsScreen from '../CredentialsScreen/CredentialsScreen';
import Input from '../Input/Input';

export default function SignIn() {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const extra = {
    text: 'Ещё не зарегистрированы?',
    name: 'Регистрация',
    link: 'https://ya.ru',
  };

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
    <CredentialsScreen
      title='Рады видеть!'
      submitButtonText='Войти'
      onSubmit={handleSubmit}
      extra={extra}
    >
      <Input
        label='E-mail'
        value={credentials.email}
        name='email'
        type='text'
        onChange={handleChange}
        errorMessage=''
      />
      <Input
        label='Пароль'
        value={credentials.password}
        name='password'
        type='password'
        onChange={handleChange}
        errorMessage='Что-то пошло не так...'
      />
    </CredentialsScreen>
  );
}
