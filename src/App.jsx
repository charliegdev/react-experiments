import React, { Component } from 'react';
import MouseTracker from './MouseTracker2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MouseTracker />
        </header>
      </div>
    );
  }
}

export default App;
