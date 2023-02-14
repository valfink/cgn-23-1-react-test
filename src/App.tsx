import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";

function App() {
    const greetingName: string = "Everybody!!!";
    const nameArray: string[] = ["Valentin", "Katrin", "Johannes", "Alaa", "Gleb"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name={greetingName} />
          <p>Attention – mapping...</p>
          {nameArray.map(name => <Greeting name={name} />)}
      </header>
    </div>
  );
}

export default App;
