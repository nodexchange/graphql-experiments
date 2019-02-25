import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches'
import MissionKey from './components/MissionKey'
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <MissionKey />
        <Launches />
      </div>
    );
  }
}

export default App;
