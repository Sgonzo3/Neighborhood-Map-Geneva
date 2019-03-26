import React from 'react'
import './App.css'
import POI from './POI.js'

export default class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info:""
		}
	}
	//fetch first paragraph of the Wikipedia article on Geneva, Switzerland through WikiMedia API
	wikiCall = () => {
		fetch(
			"https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Geneva"
		).then(resp => {
			return resp.json();
		}).then(data => {
			this.setState({info: data.query.pages[12521].extract,});
		}).catch(resp => {
			alert("Failed to get info from WikiMedia API. More details in Developer Console.");
			console.log("Failed to get info from WikiMedia API: " + resp);
		});
	}
	componentDidMount() {
		this.wikiCall();
	}
	render() {
		return(
			<section id="panel">
				<h1 id="page-title">Neighborhood Map:</h1>
				<article id="info-window" tabIndex="0">
					<h2>Geneva</h2>
					<p>{this.state.info}</p>
				</article>
				<div className="filter-options">
					<h2>Filter Options:</h2>
					<select value={this.props.filter} name="filter-selection" id="" onChange={this.props.setFilteredList}>
						<option value="All">All</option>
						<option value="Food">Food</option>
						<option value="Drinks">Drinks</option>
						<option value="Coffee">Coffee</option>
					</select>
				</div>
				<ul id="all-poi">
				{
					// maps through filteredList rendering a POI component for each item
					this.props.filteredList.map((poi, index) => {
						return(
							<POI
							key={poi.place_id}
							id={poi.place_id}
							name={poi.name}
							category={poi.category}
							setChosenPoint={this.props.setChosenPoint}
							/>
						);
					})
				}
				</ul>
			</section>
		);
	}
}
