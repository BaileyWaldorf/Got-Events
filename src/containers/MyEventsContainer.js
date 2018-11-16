import React, {Component} from 'react';
import EventsContainer from './EventsContainer';
import EventInfoContainer from './EventInfoContainer';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const date = "April 20th, 2019"

export default class MyEventsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicEvents: [
                {name: "Event Title 1", description: description, date: date},
                {name: "Event Title 2", description: description, date: date},
                {name: "Event Title 3", description: description, date: date},
                {name: "Event Title 4", description: description, date: date},
                {name: "Event Title 5", description: description, date: date},
                {name: "Event Title 6", description: description, date: date},
                {name: "Event Title 7", description: description, date: date},
                {name: "Event Title 8", description: description, date: date},
                {name: "Event Title 9", description: description, date: date},
            ],
            privateEvents: [],
            RSOEvents: [],
            showPublicEvents: true,
            showPrivateEvents: false,
            showRSOEvents: false,
            selectedEvent: 0,
            events: []
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

    componentDidMount() {
        console.log("myeventscontainer mounted")
        fetch('https://events.ucf.edu/upcoming/feed.json')
        .then(response => response.json())
        .then(response => (this.setState({events: response}, () => {console.log(this.state.events)})))
        .catch(e => {
            console.log(e)
        })
    }

    selectEvent = (index) => {
        this.setState({selectedEvent: index})
    }

    render() {
        return (
            <div className="my-events-container">
                <EventsContainer state={this.state} selectEvent={this.selectEvent}/>
                <EventInfoContainer state={this.state} index={this.state.selectedEvent}/>
            </div>
        );
    }
}
