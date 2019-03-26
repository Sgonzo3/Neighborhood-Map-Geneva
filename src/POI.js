import React from 'react'
import './App.css'

export default class POI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<li className="poi" tabIndex="0">
				<h3>{this.props.name}</h3>
				<p>{this.props.category}</p>
				{/* on click button will change App state to the selected location as chosenPoint */}
				<button onClick={(e) => this.props.setChosenPoint(e.target.value)} value={this.props.id}>Select</button>
			</li>
		);
	}
}
