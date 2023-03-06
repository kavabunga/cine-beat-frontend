import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';
import Hamburger from '../Hamburger/Hamburger';
import './Header.css';

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='header app__element'>
      <Logo />
      {isLoggedIn && <Hamburger setIsOpen={setIsOpen} />}
      {isLoggedIn ? (
        <Navigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <Auth />
      )}
    </header>
  );
}
