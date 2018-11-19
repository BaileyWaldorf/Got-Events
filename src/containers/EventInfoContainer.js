import React, {Component} from 'react';
import MapContainer from '../components/MapContainer';

export default class EventInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'blah'
        };
    }

    render() {
        let state = this.props.state;
        return (
            <div className="event-info-container">
                {"Event Name: " + state.publicEvents[state.selectedEvent].name}
                <br></br>
                <p style={{float:"left"}}>{"Description: " + state.publicEvents[state.selectedEvent].description}</p>
                <br></br>
                {"Date: " + state.publicEvents[state.selectedEvent].date + ",    "}
                {"Time: " + state.publicEvents[state.selectedEvent].time}
                <br></br>
                {"Address: " + state.publicEvents[state.selectedEvent].address}
                <br></br>
                {"Rating: " + state.publicEvents[state.selectedEvent].rating + "/5"}

                <MapContainer address={state.publicEvents[state.selectedEvent].address}/>
            </div>
        );
    }
}
