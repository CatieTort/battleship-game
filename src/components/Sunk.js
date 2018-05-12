import React, {Component} from 'react';


class Sunk extends Component {
	constructor(props){
		super(props)

		this.state = {
			ship: this.props.shipSunk,
			shipName: [
				"Ghost",
				"Frigate",
				"Submarine",
				"Destroyer",
				"Battleship",
				"Carrier"
			],

		}
	}

	render(){
		return(
			<div className="sunk">
				<div id="sunk__msg">
					<p>You Sunk the {this.shipName[this.ship]}!</p>
						<button type="button" onClick={this.props.OnClick} className="btn" id="y">OK</button>
				</div>
			</div>
		)
	}
}

export default Sunk
