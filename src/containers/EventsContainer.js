import React, {Component} from 'react';
import Event from '../components/Event';

export default class EventsContainer extends Component {

    render() {
        return (
            <div className="events-container">
                {this.props.state.showPublicEvents
                    ? this.props.state.events.map((event, index) =>
                    <Event key={event.event_id} event={event} index={index} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }

                {this.props.state.showPrivateEvents
                    ? this.props.state.privateEvents.map(event =>
                    <Event key={event.name} event={event} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }

                {this.props.state.showRSOEvents
                    ? this.props.state.RSOEvents.map(event =>
                    <Event key={event.name} event={event} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }
            </div>
        );
    }
}
