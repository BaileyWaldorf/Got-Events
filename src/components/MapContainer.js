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
      latitude: 0,
      longitude: 0,
      address:this.props.address
    }    
  }

  componentWillReceiveProps(nextProps)
  {
    if(nextProps.address != this.props.address)
    {
      this.setState({address:nextProps.address});
      this.onMapLoad(nextProps);
    }
  }

  componentDidMount() {
    this.onMapLoad(this.props);
  }
  
  onMapLoad = (props) => {
      Geocode.fromAddress(this.props.address).then(
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
    // console.log(`lat: ${this.state.latitude} long: ${this.state.longitude}`);

    return (
      <Map google={this.props.google}
          center={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
          zoom={15}
          onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick}
                name={this.props.address} 
                position={{lat: this.state.latitude, lng: this.state.longitude}}/>
      
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
