import React from 'react'
import './App.css'
import Panel from './Panel.js'
import Map from './Map.js'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					name : "Restaurant Scandale",
					category: "Food",
					place_id: "ChIJoXdYzSBljEcRJDkbQcXqd6g",
				},
				{
					name : "Bleu Nuit",
					category: "Food",
					place_id: "ChIJLZfQndVkjEcR5ENGI9hnRpU",
				},
				{
					name : "Brasserie Lipp Genève",
					category: "Food",
					place_id: "ChIJpSAtailljEcRV-WskLeIpv4",
				},
				{
					name : "Jardin des Crêpes",
					category: "Food",
					place_id: "ChIJdaI_adV6jEcRESqp73UfzDU",
				},
				{
					name : "Lady Godiva Pub",
					category: "Drinks",
					place_id: "ChIJ-cF6uNV6jEcRgIPGF2x5mj0",
				},
				{
					name : "Le Kraken Bar",
					category: "Drinks",
					place_id: "ChIJt9uRtyp7jEcR0aBs1BbJ3oc",
				},
				{
					name : "Café du Lys",
					category: "Coffee",
					place_id: "ChIJh0usxip7jEcR7fg49V4HK88",
				},
				{
					name : "ROYAL Karoma Cafe",
					category: "Coffee",
					place_id: "ChIJl39vjNZkjEcRV8faI8rCHVg",
				},
				{
					name : "Bagel House Café",
					category: "Coffee",
					place_id: "ChIJQ94ASilljEcRqeC-tTpuEPk",
				},
				{
					name : "Les Recyclables",
					category: "Coffee",
					place_id: "ChIJZROpBtR6jEcRlLjgOxOpXbA",
				},
			],
			filteredList: [],
			filter: "All",
			chosenPoint: "",
		}
	}
	// Will clear info-window, filter the default list by selected filter, then set state to new filteredList, filter, and cleared chosenPoint
	setFilteredList = (selectedCategory) => {
		document.getElementById('info-window').innerHTML = ``;
		let newList = selectedCategory.target.value === "All" ? this.state.list : this.state.list.filter((poi) => {
			return poi.category === selectedCategory.target.value
		});
		this.setState({
			filteredList: newList,
			filter: selectedCategory.target.value,
			chosenPoint: "",
		});
	}
	setChosenPoint = (chosenPoint) => {
		this.setState({
			chosenPoint: chosenPoint,
		});
	}
	componentDidMount() {
		if(this.state.filter === "All") {
			this.setState({filteredList:this.state.list});
		}
	}
	render() {
    	return(
	      <main>
			    <Panel
					filteredList={this.state.filteredList}
					setFilteredList={this.setFilteredList}
					filter={this.state.filter}
					setChosenPoint={this.setChosenPoint}
					/>
					<Map
					filteredList={this.state.filteredList}
					chosenPoint={this.state.chosenPoint}
					/>
	  		</main>
        )
    }
}