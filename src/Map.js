/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
class Map extends Component {
    constructor(props){
        super()
    this.state = {
        directions: null,
        lat:props.lat1,
        lng:parseFloat(props.lng1),
        lat1:parseFloat(props.lat2),
        lat2:parseFloat(props.lng2)

};}

componentDidMount(props) {
    
    console.log(this.state.lat)
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: this.state.lat, lng:  this.state.lng };
    const destination = { lat: this.state.lat1, lng:  this.state.lat2};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(24.8669427000000,  67.0256899000000)
                },
                {
                    location: new google.maps.LatLng(24.9474217000000,67.0980351000000)
                }
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );
}

render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            Center={{ lat: 24.8669427000000, lng:   67.0256899000000}}
            defaultZoom={13}
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: "500px" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>


       );
    }
}

export default Map;