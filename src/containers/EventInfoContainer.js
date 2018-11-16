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
                {state.publicEvents[state.selectedEvent].name}
                <MapContainer address="University of Central Florida"/>
            </div>
        );
    }
}
