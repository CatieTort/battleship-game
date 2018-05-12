import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import Start from "./components/Start";
import Sunk from "./components/Sunk";
import Gameover from "./components/Gameover";


class App extends Component {
	constructor(props){
		super(props)

		this.state = { showModal: false,}

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}

	  handleShow() {
	    this.setState({showModal: true});
	  }

	  handleHide() {
	    this.setState({showModal: false});
	  }

	  newGame(){
		  this.forceUpdate()
	  }

	  // <Sunk onClick={this.handleHide} />

	render() {
		const modal = this.state.showModal ? (
				<Modal>
					<div className="popup_container" onClick={this.handleHide}>
						<div id="modal" className="popup">

							<Gameover onClick={this.handleHide} newGame={this.newGame} />
						</div>
					</div>
				</Modal>
		) : null;
		return (
			<div>
				<div className="container">
					<div><button onClick={this.handleShow}>Click Me!</button></div>
					<Header/>
					<Router>
						<Switch>
							<Route exact path='/' component={Start}/>
						</Switch>
					</Router>
				</div>
				<Footer/>
				{modal}
			</div>
		)
	}
}

export default App;
