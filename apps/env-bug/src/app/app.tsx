import React from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to env-bug!</h1>
      </header>
      <main>
        <h1>Environment variables<br/>(expecting to have BASE_URL from .env)</h1>
        <p>{JSON.stringify(process.env)}</p>
      </main>
    </div>
  );
};

export default App;
