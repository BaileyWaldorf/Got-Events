import React from 'react';
import EventInfoHeader from '../components/EventInfoHeader';
import MapContainer from '../components/MapContainer';

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
                {state.events[state.selectedEvent] === undefined
                    ? null
                    : <EventInfoHeader event={state.events[state.selectedEvent]}/>
                }
                {state.events[state.selectedEvent] === undefined
                    ? null
                    : state.events[state.selectedEvent].title
                }

                {state.events[state.selectedEvent] === undefined
                    ? null
                    : console.log("Current address of selected: " + state.events[state.selectedEvent].location)
                }

                {state.events[state.selectedEvent] === undefined
                    ? null
                    : console.log("Current address of selected: " + state.selectedEvent)
                }

                {state.events[state.selectedEvent] === undefined
                    ? null
                    :
                    <MapContainer address={state.events[state.selectedEvent].location}/>}
            </div>
        );
    }
}
