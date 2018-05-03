import React, { Component } from 'react';

class Ships extends Component {

    render (){

        return(
            <div className="ship-container">
				<span>Carrier</span>
				<img src={require('../images/carrier.gif')} alt="Carrier" id="Carrier"/>
				<div id="5" className="ship-hits"></div>
				<span>Battleship</span>
				<img src={require('../images/battlship.gif')} alt="Battleship" id="Battleship"/>
				<div id="4" className="ship-hits"></div>
				<span>Destroyer</span>
				<img src={require('../images/destroyer.jpg')} alt="Destroyer" id="Destroyer"/>
				<div id="3" className="ship-hits"></div>
				<span>Submarine</span>
				<img src={require('../images/sub.png')} alt="Submarine" id="Sub"/>
				<div id="2" className="ship-hits"></div>
				<span>Frigate</span>
				<img src={require('../images/frigate.png')} alt="Frigate" id="Frigate"/>
				<div id="1" className="ship-hits"></div>
            </div>
        )
    }
}

export default Ships;
