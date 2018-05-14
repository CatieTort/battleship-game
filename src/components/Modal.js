import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Sunk from "./Sunk";
import Gameover from "./Gameover";

const MODAL = document.getElementById('modal-root');

class Modal extends Component {
	constructor(props){
		super(props);

		let div1 = document.createElement('div');

		this.el = div1;

	}

	componentDidMount(){
		MODAL.appendChild(this.el);
		console.log(this.props)
	}

	componentWillUnmount(){
		MODAL.removeChild(this.el);
	}

	renderMsg(){
		const { hide, game, shots, ships, ship } = this.props

		if (ship > 0 && ships > 0){
			<Sunk onClick={hide} ship={ship}/>
		} else if (shots === 0 && ships > 0){
			<Gameover winner={false} onClick={hide} newGame={game} />
		} else if (ships === 0){
			<Gameover winner={true} onClick={hide} newGame={game} />
		}else if (shots === 0 && ships === 0){
			<Gameover winner={true} onClick={hide} newGame={game} />
		}
	}

	render(){
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
			<div className="popup_container" onClick={this.props.hide}>
				<div id="modal" className="popup">
					{this.renderMsg()}
				</div>
			</div>
		);
	}
}

export default Modal
