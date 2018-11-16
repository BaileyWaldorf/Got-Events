import React, {Component} from 'react';
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

let latitude;
let longitude;

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBbHGz9WI9s7eneKyyCGxsP6bTMfc70ofM");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

export class MapContainer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: 0.0,
      longitude: 0.0,
      address:this.props.address
    }

    this.onMapLoad();
  }

  onMapLoad = (props) => {
      Geocode.fromAddress(this.state.address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({
              latitude: lat,
              longitude: lng,
              });
        },
        error => {
            console.error(error);
        }
      );
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

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={this.props.address} />
      
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
  apiKey: ('AIzaSyBbHGz9WI9s7eneKyyCGxsP6bTMfc70ofM')
})(MapContainer)
