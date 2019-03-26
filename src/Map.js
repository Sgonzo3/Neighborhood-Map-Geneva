import React from 'react'
import './App.css'

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapLoaded: false,
		}
	}
	// initializes the map
	initMap  = () =>  {
		this.map = new window.google.maps.Map(
			document.getElementById('map'), {
				center:{lat:46.205531, lng:6.14519574},
				zoom: 15,
				fullscreenControl: false,
				streetViewControl: false,
				zoomControl: true,
				mapTypeControl:false,
			}
		);
		// each item in filteredList is displayed on the map with information from Google Maps API
		this.props.filteredList.forEach((poi) => {
			let request = {
				placeId: poi.place_id,
				fields: ['name', 'place_id','geometry','formatted_address', 'photos', 'rating']
			}
			let service = new window.google.maps.places.PlacesService(this.map);

			// requests info from Google Maps API
			service.getDetails(request, (place, status) => {
				if(status === window.google.maps.places.PlacesServiceStatus.OK) {
					//creates markers for locations
					let marker = new window.google.maps.Marker({
						map: this.map,
						position: place.geometry.location,
						title: place.place_id,
						animation: window.google.maps.Animation.DROP,
					});
					// sets content for window with info from Maps API
					let windowContent =
						`<div class="infoWindow">
							<h2>${place.name}</h2>
							<img src="${place.photos[0].getUrl({maxHeight:300, maxWidth: 600})}" alt="Preview photo of ${place.name}">
							<p>${place.formatted_address}</p>
							<p>Rating: ${place.rating}</p>
						</div>`
					// creates event listener to remove animation after user interacts with map
					window.addEventListener('click', () => {
						marker.setAnimation(null);
					});
					// sets chosen marker to BOUNCE once, displays windowContent in info-window, scrolls page to display altered info-window
					window.google.maps.event.addListener(marker, 'click', () => {
						marker.setAnimation(window.google.maps.Animation.BOUNCE);
						document.getElementById("info-window").innerHTML = windowContent;
						document.getElementById('info-window').scrollIntoView({behavior: 'smooth'});
					});
					// sets chosen marker to BOUNCE until next interraction, displays windowContent in info-window, scrolls page to display altered info-window
					if(marker.title === this.props.chosenPoint) {
						marker.setAnimation(window.google.maps.Animation.BOUNCE);
						this.map.setCenter(marker.getPosition());
						document.getElementById("info-window").innerHTML = windowContent;
						document.getElementById('info-window').scrollIntoView({behavior: 'smooth'});
					}
				} else {
					alert("Failed to get some details from Maps API. More details in Developer Console.");
					console.log("Failed to get some details from Maps API: " + status);
				}
				});
		});
	}
	componentDidMount() {
		// creates async script for Maps API, sets state when loaded
		let script = window.document.createElement('script');
		script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYbXqsVnGy_kqg6cxgsXOE_SsbfMfjH4c&libraries=places";
		script.async = true;
		script.defer = true;
		script.addEventListener('error', () => alert("Failed to load Google Maps API") );
		script.addEventListener('load', () => this.setState({mapLoaded: true}) );
		document.getElementById('map').appendChild(script);
	}
	componentDidUpdate(prevProps) {
		// initializes map when script is loaded
		if(this.state.mapLoaded){
			this.initMap();
		}
	}
	render() {
		return(
			<aside id="map-container" role="application">
				<div id="map"></div>
			</aside>
		);
	}
}
