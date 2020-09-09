import React from 'react';
import { Table } from 'reactstrap';
import './ZomatoApp.css';

const ZomatoResults = (props) => {
    // console.log(props)
    console.log('Nearby Restaurants:', props.results)
    console.log(props.results.location.city_name)
    // console.log(props.results.nearby_restaurants[0].restaurant)
    // console.log(props.results.nearby_restaurants[1].restaurant.name)
    // console.log(props.results.nearby_restaurants[2].restaurant.name)

    const ZomatoResultsMapper = () => {
        return props.results.nearby_restaurants.map((value, index) => {
            return (
                <tr key={index}>
                    {/* // scope = "row" */}
                    <td className="text-warning bg-dark">{value.restaurant.name}</td>
                    <td>{value.restaurant.cuisines}</td>
                    <td>{value.restaurant.user_rating.aggregate_rating}</td>
                    <td>{value.restaurant.location.address}</td>
                    <td><a href={value.restaurant.url} target="blank" rel="noopener noreferrer">Learn More</a></td>
                    <td><a href={value.restaurant.photos_url} target="_blank" rel="noopener noreferrer">Photos</a></td>
                </tr>
            )
        })
    }

    return (
        <div>

            {/* // props.results.nearby_restaurants.map((value, index) => {
                //     return (
                //         <tr key={index}>
                //             <th scope="row">(value.id)</th>
                //         </tr>

                //     )
                // } */}
            {/* <hr /> */}
            <br />
            <div className="bg-light p-1">Zomato Results Near You</div>
            
            <div className="bg-info p-1">{props.results.location.city_name}</div>
            <div className="bg-secondary p-1">Latitude: {props.results.location.latitude}, Longitude: {props.results.location.longitude}</div>
            <br />
            {/* <hr /> */}
            <Table>
                <thead>
                    <tr>
                        <th className="text-primary bg-dark">Restaurant Name</th>
                        <th className="text-primary bg-dark">Cuisines</th>
                        <th className="text-primary bg-dark">User Rating</th>
                        <th className="text-primary bg-dark">Address</th>
                        <th className="text-danger bg-dark">Zomato Link</th>
                        <th className="text-danger bg-dark">Zomato Photos</th>
                    </tr>
                </thead>
                <tbody>
                    {ZomatoResultsMapper()}
                </tbody>
            </Table>
        </div>
    )
}

//     return (


//             props.results.map(result = {
//                 return '';

//             )
//             })
// }

export default ZomatoResults;