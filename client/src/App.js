import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    );
  }
}

export default App;
