import React, {Component} from 'react';


class Sunk extends Component {

	render(){

		return(
			<div className="sunk">
				<div id="sunk__msg">
					<p>You Sunk the {this.props.ship}!</p>
						<button type="button" onClick={this.props.OnClick} className="btn" id="y">OK</button>
				</div>
			</div>
		)
	}
}

export default Sunk
