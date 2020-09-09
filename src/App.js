import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import OpenWeather from "./components/openweather/Openweather";
import Zomato from "./components/zomato/ZomatoApp";

function App() {

	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getCoord);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}, ['']);

	const getCoord = (position) => {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
	};

	return (
		<div className="App">
			PAGE HEADER
			<Nasa />
			<OpenWeather lat={lat} lon={lon} />
			<Zomato lat={lat} lon={lon} />
		</div>
	);
}

export default App;
