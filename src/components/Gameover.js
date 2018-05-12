import React, {Component} from 'react';


class Gameover extends Component {

	render(){
		return(
			<div className="gameover">

				<div className="gameover__msg">You Lose!</div>

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
