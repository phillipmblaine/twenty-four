import React, { useState } from "react";
import ZomatoResults from './ZomatoResults';

// const baseURL = 'https://developers.zomato.com/api/';
// const geocodeURL = 'https://developers.zomato.com/api/geocode'
const apiKey = '98267bea20b05127cd2a4361c18d948a';

const ZomatoApp = (props) => {

	// const [latitudeNum, setLatitudeNum] = useState(0);
	// const [longitudeNum, setLongitudeNum] = useState(0);
	// const [results, setResults] = useState([]);
	// const [search, setSearch] = useState('');
	const [results, setResults] = useState();
	// const [buttonClicked, setButtonClicked] = useState(false);
	// const [updateActive, setUpdateActive] = useState(false);

	// const updateOn = () => {
	// 	setUpdateActive(true);
	// }

	// const updateOff = () => {
	// 	setUpdateActive(false);
	// }

	const fetchLocationResults = () => {
		const completeURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.lon}`;

		fetch(completeURL,
			{
				method: 'get',
				headers: new Headers
					({
						'user-key': apiKey,
						'Content-Type': 'application/json'
					})
			}
		)
			.then((response) => {
				// console.log(completeURL, res)
				return response.json()
			})
			.then((restaurantData) => {
				// console.log(restaurantData)
				setResults(restaurantData)
				// setRestaurantDataLength(Object.keys(results.restaurant_data).length)
				// console.log(results)
				// console.log(results.nearby_restaurants)
				// console.log(results.nearby_restaurants.length)
				// console.log(Object.keys(results).length)
				// console.log(results)
				// console.log(restaurantDataLength)
				// setButtonClicked(true)
			})
		// .then(() => {
		// 	console.log(buttonClicked)
		// })

	}

	// 	let [a, b];
	// 	console.log(a, b);
	// 	headers: new Headers({
	// 		'method': 'POST',
	// 		'Content-Type': 'application/json'
	// 	})
	// 		.then(res => res.json())
	// 		.catch(error => console.log(error))
	// }

	return (
		<div className="main">
			<div className="mainDiv">

				<p>Check Restaurants Nearby:</p>
				<button className="rounded bg-warning" onClick={() => fetchLocationResults()}>Search</button>
				{
					results
						? <ZomatoResults results={results} />
						: <div>Try It!</div> // null
				}
			</div>
		</div>
	)
};

// const getPosition = () => {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition((position) => {
// 			let positionInfo = `Current position: latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`;
// 			console.log(positionInfo)
// 			let x = position.coords.latitude
// 			let y = position.coords.longitude
// 			let z = [x, y];
// 			console.log(z)
// 			return z
// 		})
// 	}

export default ZomatoApp;