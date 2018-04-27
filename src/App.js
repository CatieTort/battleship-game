import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="container">
	  	<Header/>
        <Board />
		<Footer/>
      </div>
    );
  }
}

export default App;
