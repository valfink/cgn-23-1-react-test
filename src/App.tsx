import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greetingName, setGreetingName] = useState("Everybody!")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {greetingName}</h1>
      </header>
    </div>
  );
}

export default App;
