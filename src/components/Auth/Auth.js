import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  return (
    <ul className='auth'>
      <li className='auth__element'>
        <Link className='auth__link app__link' to='/signup'>
          Sign up
        </Link>
      </li>
      <li className='auth__element'>
        <Link
          className='auth__link auth__link_type_login app__link'
          to='/signin'
        >
          Sign in
        </Link>
      </li>
    </ul>
  );
}
