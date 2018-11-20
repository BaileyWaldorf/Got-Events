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
                {state.events[this.props.index] === undefined
                    ? null
                    : <EventInfoHeader event={state.events[this.props.index]}/>
                }
                <MapContainer />
            </div>
        );
    }
}
