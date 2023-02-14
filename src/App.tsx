import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";

function App() {
    const greetingName = "Everybody!!!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name={greetingName} />
      </header>
    </div>
  );
}

export default App;
