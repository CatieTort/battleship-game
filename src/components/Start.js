import React, {Component} from 'react';
import Board from './Board';

class Start extends Component {

	render (){
		return (
			<Board shipCount={5} maxShots={50}/>
		)
	}
}

export default Start
