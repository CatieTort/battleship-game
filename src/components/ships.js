import React, { Component } from 'react';

class Ships extends Component {

    render (){

        return(
            <div className="ship-container">
				<span>Carrier</span>
				<img src={require('../images/carrier.gif')} alt="Carrier" id="Carrier"/>
				<span>Battleship</span>
				<img src={require('../images/battlship.gif')} alt="Battleship" id="Battleship"/>
				<span>Destroyer</span>
				<img src={require('../images/destroyer.jpg')} alt="Destroyer" id="Destroyer"/>
				<span>Submarine</span>
				<img src={require('../images/sub.png')} alt="Submarine" id="Sub"/>
				<span>Frigate</span>
				<img src={require('../images/frigate.png')} alt="Frigate" id="Frigate"/>
            </div>
        )
    }
}

export default Ships;
