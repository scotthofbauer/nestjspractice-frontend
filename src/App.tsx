import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by{' '}
          <a
            className="App-link"
            href="https://github.com/GetLevvel/lvl_cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            lvl_cli
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
