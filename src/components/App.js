import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		// Set initial state
		this.state = { msg: '' }

		// Binding this keyword
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {

		// Changing state
		this.setState({ msg: ' Hello, I\'ve learnt to use the full-stack evaluation tool. This makes me so happy' })
	};

	render() {
		return (
			<div id="main">
				{ /* Do not remove this main div!! */}
				<p>{this.state.msg}</p>

				{/* Set click handler */}
				<button onClick={this.handleClick}>
					Click Me!
				</button>
			</div>
		);
	}
}


export default App;

