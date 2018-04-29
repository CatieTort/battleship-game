import React, {Component} from 'react';

class End extends Component {

	render (){
		return (
			<div className="re-start">
				<div className="start-box">
				<p>Play Again?</p>
					<button className="btn" id="y">Yes</button>
					<button className="btn" id="n">No</button>
				</div>
			</div>
		)
	}
}

export default End
