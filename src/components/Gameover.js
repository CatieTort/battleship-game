import React, {Component} from 'react';

const gameMsg = document.getElementById('gameMsg')


class Gameover extends Component {
	constructor(props){
		super(props)

		this.state = {winner: this.props.winner}
	}

	displayMsg(){
		if (this.state.winner === true){
			gameMsg.innerHTML = "You Won!"
		} else {
			gameMsg.innerHTML = "You Lose!"
		}
	}

	render(){
		return(
			<div className="gameover">

				<div id="gameMsg" className="gameover__msg">{this.displayMsg}</div>

				<div className="gameover__restart">
					<p>Play Again?</p>
						<button type="button" onClick={this.props.newGame} className="btn" id="y">Yes</button>
						<button type="button" onClick={this.props.OnClick} className="btn" id="n">No</button>
				</div>
			</div>
		)
	}
}

export default Gameover
