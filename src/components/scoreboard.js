import React, { Component } from 'react';

class Scoreboard extends Component {

    render (){

        return(
            <div className="scoreboard">
                    <div id="torpedo"><h2>Torpedoes: {this.props.shotsRemaining} / 50</h2></div>
					<div id="ship"><h2>Ships: {this.props.ships} / 5</h2></div>
            </div>
        )
    }
}

export default Scoreboard;
