import React, {Component} from 'react';
import Event from '../components/Event';

export default class EventsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicEvents: [
                {name: "poop", description: "a description"},
            ],
            privateEvents: [],
            RSOEvents: [],
            showPublicEvents: true,
            showPrivateEvents: false,
            showRSOEvents: false,
        };

        // fetch('http://localhost:3001/publicevents')
        // .then(response => response.text())
        // .then(response => (this.setState({publicEvents: response}, () => {console.log(this.state.publicEvents)})))
        //
        // fetch('http://localhost:3001/privateevents')
        // .then(response => response.text())
        // .then(response => (this.setState({privateEvents: response}, () => {console.log(this.state.privateEvents)})))
        //
        // fetch('http://localhost:3001/RSOevents')
        // .then(response => response.text())
        // .then(response => (this.setState({RSOEvents: response}, () => {console.log(this.state.RSOEvents)})))
    }

    showEventInfo = () => {
        console.log("event clicked!");
        return;
    }

    render() {
        return (
            <div className="eventsContainer">
                {this.state.showPublicEvents
                    ? this.state.publicEvents.map(event =>
                    <Event key={event} event={event} onClick={() => {console.log("clicked")}} />
                    )
                    : null
                }

                {this.state.showPrivateEvents
                    ? this.state.privateEvents.map(event =>
                    <Event key={event} event={event} click={() => {console.log("clcikeddd")}} />
                    )
                    : null
                }

                {this.state.showRSOEvents
                    ? this.state.RSOEvents.map(event =>
                    <Event key={event} event={event} onClick={this.showEventInfo} />
                    )
                    : null
                }
            </div>
        );
    }
}
