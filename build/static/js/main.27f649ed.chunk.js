(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),c=(n(14),n(1)),l=n(2),s=n(4),d=n(3),p=n(5),u=(n(6),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("li",{className:"poi",tabIndex:"0"},a.a.createElement("h3",null,this.props.name),a.a.createElement("p",null,this.props.category),a.a.createElement("button",{onClick:function(t){return e.props.setChosenPoint(t.target.value)},value:this.props.id},"Select"))}}]),t}(a.a.Component)),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).wikiCall=function(){fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Geneva").then(function(e){return e.json()}).then(function(e){n.setState({info:e.query.pages[12521].extract})}).catch(function(e){alert("Failed to get info from WikiMedia API. More details in Developer Console."),console.log("Failed to get info from WikiMedia API: "+e)})},n.state={info:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.wikiCall()}},{key:"render",value:function(){var e=this;return a.a.createElement("section",{id:"panel"},a.a.createElement("h1",{id:"page-title"},"Neighborhood Map:"),a.a.createElement("article",{id:"info-window",tabIndex:"0"},a.a.createElement("h2",null,"Geneva"),a.a.createElement("p",null,this.state.info)),a.a.createElement("div",{className:"filter-options"},a.a.createElement("h2",null,"Filter Options:"),a.a.createElement("select",{value:this.props.filter,name:"filter-selection",id:"",onChange:this.props.setFilteredList},a.a.createElement("option",{value:"All"},"All"),a.a.createElement("option",{value:"Food"},"Food"),a.a.createElement("option",{value:"Drinks"},"Drinks"),a.a.createElement("option",{value:"Coffee"},"Coffee"))),a.a.createElement("ul",{id:"all-poi"},this.props.filteredList.map(function(t,n){return a.a.createElement(u,{key:t.place_id,id:t.place_id,name:t.name,category:t.category,setChosenPoint:e.props.setChosenPoint})})))}}]),t}(a.a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).initMap=function(){n.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:46.205531,lng:6.14519574},zoom:15,fullscreenControl:!1,streetViewControl:!1,zoomControl:!0,mapTypeControl:!1}),n.props.filteredList.forEach(function(e){var t={placeId:e.place_id,fields:["name","place_id","geometry","formatted_address","photos","rating"]};new window.google.maps.places.PlacesService(n.map).getDetails(t,function(e,t){if(t===window.google.maps.places.PlacesServiceStatus.OK){var o=new window.google.maps.Marker({map:n.map,position:e.geometry.location,title:e.place_id,animation:window.google.maps.Animation.DROP}),a='<div class="infoWindow">\n\t\t\t\t\t\t\t<h2>'.concat(e.name,'</h2>\n\t\t\t\t\t\t\t<img src="').concat(e.photos[0].getUrl({maxHeight:300,maxWidth:600}),'" alt="Preview photo of ').concat(e.name,'">\n\t\t\t\t\t\t\t<p>').concat(e.formatted_address,"</p>\n\t\t\t\t\t\t\t<p>Rating: ").concat(e.rating,"</p>\n\t\t\t\t\t\t</div>");window.addEventListener("click",function(){o.setAnimation(null)}),window.google.maps.event.addListener(o,"click",function(){o.setAnimation(window.google.maps.Animation.BOUNCE),document.getElementById("info-window").innerHTML=a,document.getElementById("info-window").scrollIntoView({behavior:"smooth"})}),o.title===n.props.chosenPoint&&(o.setAnimation(window.google.maps.Animation.BOUNCE),n.map.setCenter(o.getPosition()),document.getElementById("info-window").innerHTML=a,document.getElementById("info-window").scrollIntoView({behavior:"smooth"}))}else alert("Failed to get some details from Maps API. More details in Developer Console."),console.log("Failed to get some details from Maps API: "+t)})})},n.state={mapLoaded:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYbXqsVnGy_kqg6cxgsXOE_SsbfMfjH4c&libraries=places",t.async=!0,t.defer=!0,t.addEventListener("error",function(){return alert("Failed to load Google Maps API")}),t.addEventListener("load",function(){return e.setState({mapLoaded:!0})}),document.getElementById("map").appendChild(t)}},{key:"componentDidUpdate",value:function(e){this.state.mapLoaded&&this.initMap()}},{key:"render",value:function(){return a.a.createElement("aside",{id:"map-container",role:"application"},a.a.createElement("div",{id:"map"}))}}]),t}(a.a.Component),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).setFilteredList=function(e){document.getElementById("info-window").innerHTML="";var t="All"===e.target.value?n.state.list:n.state.list.filter(function(t){return t.category===e.target.value});n.setState({filteredList:t,filter:e.target.value,chosenPoint:""})},n.setChosenPoint=function(e){n.setState({chosenPoint:e})},n.state={list:[{name:"Restaurant Scandale",category:"Food",place_id:"ChIJoXdYzSBljEcRJDkbQcXqd6g"},{name:"Bleu Nuit",category:"Food",place_id:"ChIJLZfQndVkjEcR5ENGI9hnRpU"},{name:"Brasserie Lipp Gen\xe8ve",category:"Food",place_id:"ChIJpSAtailljEcRV-WskLeIpv4"},{name:"Jardin des Cr\xeapes",category:"Food",place_id:"ChIJdaI_adV6jEcRESqp73UfzDU"},{name:"Lady Godiva Pub",category:"Drinks",place_id:"ChIJ-cF6uNV6jEcRgIPGF2x5mj0"},{name:"Le Kraken Bar",category:"Drinks",place_id:"ChIJt9uRtyp7jEcR0aBs1BbJ3oc"},{name:"Caf\xe9 du Lys",category:"Coffee",place_id:"ChIJh0usxip7jEcR7fg49V4HK88"},{name:"ROYAL Karoma Cafe",category:"Coffee",place_id:"ChIJl39vjNZkjEcRV8faI8rCHVg"},{name:"Bagel House Caf\xe9",category:"Coffee",place_id:"ChIJQ94ASilljEcRqeC-tTpuEPk"},{name:"Les Recyclables",category:"Coffee",place_id:"ChIJZROpBtR6jEcRlLjgOxOpXbA"}],filteredList:[],filter:"All",chosenPoint:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"All"===this.state.filter&&this.setState({filteredList:this.state.list})}},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(m,{filteredList:this.state.filteredList,setFilteredList:this.setFilteredList,filter:this.state.filter,setChosenPoint:this.setChosenPoint}),a.a.createElement(f,{filteredList:this.state.filteredList,chosenPoint:this.state.chosenPoint}))}}]),t}(a.a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Neighborhood-Map-Geneva",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Neighborhood-Map-Geneva","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):v(t,e)})}}()},6:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.27f649ed.chunk.js.map