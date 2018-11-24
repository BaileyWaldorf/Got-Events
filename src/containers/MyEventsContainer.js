import React, {Component} from 'react';
import EventsContainer from './EventsContainer';
import EventInfoContainer from './EventInfoContainer';
import Header from '../components/Header';
import { throws } from 'assert';

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
            selectedEvent: 0,
            comments: []
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
        this.setState({showPublicEvents: true, showPrivateEvents: false, showRSOEvents: false, selectedEvent: 0})
    }

    showPrivateEvents = () => {
        console.log("now showing private events");
        this.setState({showPublicEvents: false, showPrivateEvents: true, showRSOEvents: false, selectedEvent: 0})
    }

    showRSOEvents = () => {
        console.log("now showing RSO events");
        this.setState({showPublicEvents: false, showPrivateEvents: false, showRSOEvents: true, selectedEvent: 0})
    }

    selectEvent = (index) => {
        var eventID = 0;
        this.setState({selectedEvent: index}, () => {
            console.log("fetching comments");

            if(this.state.showPublicEvents) {
                eventID = this.state.publicEvents[this.state.selectedEvent].id
            } else if(this.state.showPrivateEvents) {
                eventID = this.state.privateEvents[this.state.selectedEvent].id
            } else if(this.state.showRSOEvents) {
                eventID = this.state.RSOEvents[this.state.selectedEvent].id
            }

            fetch(`http://localhost:3001/get-comments?event=${eventID}`)
            .then(response => response.json())
            .then(response => (this.setState({comments: response}, () => {console.log('comments: ', this.state.comments)})))
            .catch(e => {
                console.log("Comment error:", e)
            })
        })
    }
    
    render() {
        return (
            <div className="my-events-container">
                <EventsContainer state={this.state} selectEvent={this.selectEvent} showPublicEvents={this.showPublicEvents} showPrivateEvents={this.showPrivateEvents} showRSOEvents={this.showRSOEvents}/>
                <EventInfoContainer username={this.props.state.user[0] !== undefined ? this.props.state.user[0].username : 'Bailey'} state={this.state} authenticated={this.props.state.authenticated} index={this.state.selectedEvent} comments={this.state.comments}/>
            </div>
        );
    }
}
