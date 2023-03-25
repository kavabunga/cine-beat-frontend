import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <button
        className='navigation__close-button app__button'
        type='button'
        onClick={() => setIsOpen(false)}
      />
      <ul className='navigation__list'>
        <li className='navigation__element navigation__element_type_main'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active app__link'
                : 'navigation__link app__link'
            }
            to='/'
            onClick={() => setIsOpen(false)}
            end
          >
            Главная
          </NavLink>
        </li>
        <li className='navigation__element'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active app__link'
                : 'navigation__link app__link'
            }
            to='/movies'
            onClick={() => setIsOpen(false)}
            end
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__element'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active app__link'
                : 'navigation__link app__link'
            }
            to='/saved-movies'
            onClick={() => setIsOpen(false)}
            end
          >
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
      <Link
        className='navigation__link navigation__link_type_profile app__link'
        to='/profile'
        onClick={() => setIsOpen(false)}
      >
        Аккаунт
      </Link>
    </nav>
  );
}
