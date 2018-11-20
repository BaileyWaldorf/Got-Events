import React, {Component} from 'react';
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

let latitude;
let longitude;

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBRVeBqXwkWPREXuMBFtX3cUxiNKyYGzCc");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get latidude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
    response => {
        const { lat, lng } = response.results[0].geometry.location;
        latitude = lat;
        longitude = lng;
    },
    error => {
        console.error(error);
    }
);

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

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

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

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
