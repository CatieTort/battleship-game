import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Start from "./components/Start"
import End from "./components/End"


class App extends Component {
	render() {
		return (
			<div className="Site">
				<div className="container">
					<Header/>
					<Router>
						<Switch>
							<Route exact path='/' component={Start}/>
							<Redirect to='/game-over' component={End}/>
						</Switch>
					</Router>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;
