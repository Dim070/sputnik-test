import React, { FC } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.nav__link}>
          Main
        </NavLink>
        <NavLink to="/gallery" className={styles.nav__link}>
          Gallery
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
