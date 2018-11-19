import React, {Component} from 'react';
import Event from '../components/Event';
import EventInfoContainer from './EventInfoContainer';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const date = "April 20th, 2019"

export default class EventsContainer extends Component {

    render() {
        return (
            <div className="events-container">
                {this.props.state.showPublicEvents
                    ? this.props.state.publicEvents.map((event, index) =>
                    <Event key={event.name} event={event} index={index} selectEvent={this.props.selectEvent} date={this.props.state.date}/>
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
