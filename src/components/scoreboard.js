import React, { Component } from 'react';

class Scoreboard extends Component {

    render (){

        return(
            <div className="scoreboard">
                    <div id="torpedo"><h2>Torpedoes: </h2></div>
					<div id="ship"><h2>Ships: </h2></div>
            </div>
        )
    }
}

export default Scoreboard;
