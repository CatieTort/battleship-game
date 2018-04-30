import React, { Component } from 'react';

class Square extends Component {

    render (){
        return(
			<td className={this.props.classes}
            id={this.props.id} coordiates={this.props.key} value={this.props.value} onClick={this.props.onClick}></td>

        )
    }
}
export default Square;
