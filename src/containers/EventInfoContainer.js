<<<<<<< HEAD
import React from 'react';
import EventInfoHeader from '../components/EventInfoHeader';
=======
import React, {Component} from 'react';
import MapContainer from '../components/MapContainer';
>>>>>>> c53cd5b80215a45d1768a1a0f61186aafd19e330

export default class EventInfoContainer extends React.Component {
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
<<<<<<< HEAD
                {state.events[this.props.index] === undefined
                    ? null
                    : <EventInfoHeader event={state.events[this.props.index]}/>
                }
=======
                {state.publicEvents[state.selectedEvent].name}
                <MapContainer />
>>>>>>> c53cd5b80215a45d1768a1a0f61186aafd19e330
            </div>
        );
    }
}
