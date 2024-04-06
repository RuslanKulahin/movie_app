import React from 'react';
import reactLogo from './assets/react.svg';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <ul>
          <li>
            <Link className="app-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="app-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="app-link" to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
