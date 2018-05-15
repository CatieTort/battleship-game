import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const MODAL = document.getElementById('modal-root');

class Modal extends Component {
	constructor(props){
		super(props);

		let div1 = document.createElement('div');

		this.el = div1;

	}

	componentDidMount(){
		MODAL.appendChild(this.el)
	}

	componentWillUnmount(){
		MODAL.removeChild(this.el);
	}

	render(){
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
		);
	}
}

export default Modal
