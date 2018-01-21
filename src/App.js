import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Notes = [
  "吃早饭",
  "码代码",
  "上厕所"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          edit <code>src/App.js</code> and save to reload.
        </p>
        {
          Notes.map(note => (<div>{note}</div>))
        }
      </div>
    );
  }
}

export default App;
