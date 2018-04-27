import React, { Component } from 'react';
import Ships from './ships';

class Scoreboard extends Component {

    render (){

        return(
            <div className="score">
				<div className="details">
					<span id="torpedos">Torpedoes: {this.props.shotsRemaining} / 50</span><br />
					<span id="ships">Ships: {this.props.ships} / 5</span>
				</div>
					<Ships/>
            </div>
        )
    }
}

export default Scoreboard;
