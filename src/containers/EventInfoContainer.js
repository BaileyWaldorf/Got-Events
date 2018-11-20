import React from 'react';
import EventInfoHeader from '../components/EventInfoHeader';
import MapContainer from '../components/MapContainer';

export default class EventInfoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let state = this.props.state;
        return (
            <div className="event-info-container">
                {state.publicEvents[this.props.index] === undefined
                    ? null
                    : <EventInfoHeader event={state.publicEvents[this.props.index]}/>
                }
                <MapContainer />
            </div>
        );
    }
}
