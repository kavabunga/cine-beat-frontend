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
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ];

  const extra = {
    text: 'Not yet registered?',
    name: 'Sign up',
    link: '/signup',
  };

  return (
    <CredentialsScreen
      title='Hey there!'
      submitButtonText='Sign in'
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      infoMessage={infoMessage}
      setInfoMessage={setInfoMessage}
      extra={extra}
      inputs={inputs}
    />
  );
}
