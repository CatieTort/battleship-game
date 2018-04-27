import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';


class App extends Component {
  render() {
    return (
      <div className="container">
	  	<Header/>
        <Board />
      </div>
    );
  }
}

export default App;
