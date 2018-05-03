import React, {Component} from 'react';
import Gameover from './Gameover';
import Sunk from './Sunk';

class ModalLauncher extends Component {
	constructor(props){
        super(props)

        this.state = {
			showModal: false,
			gameOver: this.props.gameStatus,
			ship: this.props.ship,
			sunk: true,
		}

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	// Add listeners immediately after the component is mounted.
	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp, false);
		document.addEventListener('click', this.handleOutsideClick, false);
	}

	// Remove listeners immediately before a component is unmounted and destroyed.
	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyUp, false);
		document.removeEventListener('click', this.handleOutsideClick, false);
	}

	// Handle the key press event.
	handleKeyUp(e) {
		const keys = {
			13: () => {
				e.preventDefault();
				this.closePopup();
			window.removeEventListener('keyup', this.handleKeyUp, false);
		},
	};

		if (keys[e.keyCode]) { keys[e.keyCode](); }
	}

	// Handle the mouse click on browser window.
	handleOutsideClick(e) {
		const outsidePopup = document.getElementById("modal");

		if (!outsidePopup) {
			if (!this.outsidePopup.contains(e.target)) {
				this.closePopup();
				document.removeEventListener('click', this.handleOutsideClick, false);
			}
		}
	}

	openPopup(){
		const popup = document.getElementsByClassName("popup_container")

		popup.display = 'flex';
	}

	closePopup(){
		const popup = document.getElementsByClassName("popup_container")

		popup.display = 'none';
	}

	restart(){

	}

		handleToggleModal (){
			this.setState({ showModal: !this.state.showModal });
		}

	render(){
		const {showModal, sunk, gameover} = this.state

		return(
			{showModal, sunk &&
				<div className="popup_container">
					<div id="modal" className="popup">
						<Sunk onClick={this.closePopup()}/>
					</div>
				</div>
			}

			{showModal, gameover &&
				<div className="popup_container">
					<div id="modal" className="popup">
						<Gameover onClick={this.closePopup()} newGame={this.restart}/>
					</div>
				</div>
			}
		)
	}
}

export default ModalLauncher
