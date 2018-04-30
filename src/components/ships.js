import React, { Component } from 'react';

class Ships extends Component {

    render (){

        return(
            <div className="ship-container">
				<span>Carrier</span>
				<img src={require('../images/carrier.gif')} alt="Carrier" id="Carrier"/>
				<div className="ship-hits">
					<p>X</p>
					<p>X</p>
					<p>X</p>
					<p>X</p>
					<p>X</p>
				</div>
				<span>Battleship</span>
				<img src={require('../images/battlship.gif')} alt="Battleship" id="Battleship"/>
				<div className="ship-hits">
					<p>X</p>
					<p>X</p>
					<p>X</p>
					<p>X</p>
				</div>
				<span>Destroyer</span>
				<img src={require('../images/destroyer.jpg')} alt="Destroyer" id="Destroyer"/>
				<div className="ship-hits">
					<p>X</p>
					<p>X</p>
					<p>X</p>
				</div>
				<span>Submarine</span>
				<img src={require('../images/sub.png')} alt="Submarine" id="Sub"/>
				<div className="ship-hits">
					<p>X</p>
					<p>X</p>
				</div>
				<span>Frigate</span>
				<img src={require('../images/frigate.png')} alt="Frigate" id="Frigate"/>
				<div className="ship-hits">
					<p>X</p>
				</div>
            </div>
        )
    }
}

export default Ships;
