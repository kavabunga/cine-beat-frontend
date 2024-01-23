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
      label: 'Name',
      name: 'name',
      type: 'text',
      pattern: '^[А-ЯЁа-яёA-Za-z]+$',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ];

  const extra = {
    text: 'Already registered?',
    name: 'Sign in',
    link: '/signin',
  };

  return (
    <CredentialsScreen
      title='Welcome!'
      submitButtonText='Sign up'
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      extra={extra}
      inputs={inputs}
    />
  );
}
