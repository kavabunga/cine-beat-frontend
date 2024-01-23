import React from 'react';
import './NavTab.css';

const links = [
  {
    name: 'About',
    link: '#about-project',
  },
  {
    name: 'Stack',
    link: '#techs',
  },
  {
    name: 'Student',
    link: '#about-me',
  },
];

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        {links.map((link) => (
          <li className='nav-tab__element' key={link.name}>
            <a className='nav-tab__link app__link' href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
