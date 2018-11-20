import React, {Component} from 'react';
import EventsContainer from './EventsContainer';
import EventInfoContainer from './EventInfoContainer';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const date = "April 20th, 2019"

export default class MyEventsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicEvents: [],
            privateEvents: [],
            RSOEvents: [],
            showPublicEvents: false,
            showPrivateEvents: false,
            showRSOEvents: false,
            selectedEvent: 0
        };
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
        var university = this.props.state.user[0] !== undefined ? this.props.state.user[0].university : null
        var username = this.props.state.user[0] !== undefined ? this.props.state.user[0].username : null

        fetch('http://localhost:3001/public-events')
        .then(response => response.json())
        .then(response => (this.setState({publicEvents: response}, () => {console.log(this.state.publicEvents)})))
        .catch(e => {
            console.log(e)
        })

        if(this.props.state.user[0] !== undefined) {
            var university = this.props.state.user[0].university

            fetch(`http://localhost:3001/private-events?university=${university}`)
            .then(response => response.json())
            .then(response => (this.setState({privateEvents: response}, () => {console.log(this.state.privateEvents)})))
            .catch(e => {
                console.log(e)
            })
        }

        if(this.props.state.user[0] !== undefined) {
            var username = this.props.state.user[0].username
            fetch(`http://localhost:3001/rso-events?username=${username}`)
            .then(response => response.json())
            .then(response => (this.setState({RSOEvents: response}, () => {console.log(this.state.RSOEvents)})))
            .catch(e => {
                console.log(e)
            })
        }
    }

    showPublicEvents = () => {
        console.log("now showing public events");
        this.setState({showPublicEvents: true, showPrivateEvents: false, showRSOEvents: false})
    }

    showPrivateEvents = () => {
        console.log("now showing private events");
        this.setState({showPublicEvents: false, showPrivateEvents: true, showRSOEvents: false})
    }

    showRSOEvents = () => {
        console.log("now showing RSO events");
        this.setState({showPublicEvents: false, showPrivateEvents: false, showRSOEvents: true})
    }

    selectEvent = (index) => {
        this.setState({selectedEvent: index})
    }

    render() {
        return (
            <div className="my-events-container">
                <EventsContainer state={this.state} selectEvent={this.selectEvent} showPublicEvents={this.showPublicEvents} showPrivateEvents={this.showPrivateEvents} showRSOEvents={this.showRSOEvents}/>
                <EventInfoContainer state={this.state} index={this.state.selectedEvent}/>
            </div>
        );
    }
}
