import React, {Component} from 'react';
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

let latitude;
let longitude;

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyAcqmStOhHR_mCt-C2r6HUnTPiNIcS2OYU");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get latidude & longitude from address.
const geocode = (address) => {
    console.log("Address: ", address)
    Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            latitude = lat;
            longitude = lng;
        },
        error => {
            console.error(error);
        }
    );
    let coords = {
        lat: latitude,
        lng: longitude
    }
    console.log(coords);
    return coords;
}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    componentDidMount() {
        geocode(this.props.event.location)
    }

    componentDidUpdate() {
        geocode(this.props.event.location)
    }

    render() {
        return (
                <Map
                    style={{width: '70%', height: '60%', position: 'relative', marginLeft: '15%', marginRight: '15%'}}
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    center={{lat: latitude, lng: longitude}}
                    zoom={15}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.props.event.name}
                        position={{lat: latitude, lng: longitude}}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDPf6W6tf0ixiz8ssXTS-RfaoXK4Q-HE50')
})(MapContainer)
