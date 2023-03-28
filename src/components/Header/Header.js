import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';
import Hamburger from '../Hamburger/Hamburger';
import { UserContext } from '../../contexts/UserContext';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = React.useContext(UserContext);

  return (
    <header className='header'>
      <Logo />
      {user && user.email && <Hamburger setIsOpen={setIsOpen} />}
      {user && user.email ? (
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
