import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src="./cinema-ico.png" className={styles.logo} alt="Logo" />
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={styles.link} to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
