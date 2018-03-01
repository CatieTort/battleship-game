import React, { Component } from 'react';

class Ships extends Component {

    render (){

        return(
            <div className="ship-container">
				<div id="Carrier">
					<img src={require('../images/carrier.gif')} alt="Carrier"/>
				</div>
				<div id="Battleship">
					<img src={require('../images/battlship.gif')} alt="Battleship"/>
				</div>
				<div id="Destroyer">
					<img src={require('../images/destroyer.jpg')} alt="Destroyer"/>
				</div>
				<div id="Sub">
					<img src={require('../images/sub.png')} alt="Submarine"/>
				</div>
				<div id="Frigate">
					<img src={require('../images/frigate.png')} alt="Frigate"/>
				</div>
            </div>
        )
    }
}

export default Ships;
