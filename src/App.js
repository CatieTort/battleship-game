import React, { Component } from 'react';
import './App.css';
import Board from './components/board';


class App extends Component {
  render() {
    return (
      <div className="game-container">
        <Board />
      </div>
    );
  }
}

export default App;
