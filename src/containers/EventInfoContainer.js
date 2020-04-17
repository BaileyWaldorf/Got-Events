import React from 'react';
import EventInfoHeader from '../components/EventInfoHeader';
import MapContainer from '../components/MapContainer';
import Comments from '../components/Comments';

export default class EventInfoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let state = this.props.state;
        console.log("authenticated?: ", this.props.authenticated)
        return (
            <div className="event-info-container">
                {state.showPublicEvents === false
                    ? null
                    : <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                        {console.log("public event selected:", state.publicEvents[this.props.index])}
                        <EventInfoHeader event={state.publicEvents[this.props.index]}/>
                        <Comments username={this.props.username} comments={this.props.comments} event={state.publicEvents[this.props.index]}/>
                        <MapContainer event={state.publicEvents[this.props.index]}/>
                    </div>
                }
                {(state.showPrivateEvents === true && this.props.authenticated === true)
                    ? <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                        {console.log("private event selected:", state.privateEvents[this.props.index])}
                        <EventInfoHeader event={state.privateEvents[this.props.index]}/>
                        <Comments username={this.props.username} comments={this.props.comments} event={state.privateEvents[this.props.index]}/>
                        <MapContainer event={state.privateEvents[this.props.index]}/>
                    </div>
                    : null
                }
                {(state.showRSOEvents === true && this.props.authenticated === true)
                    ? <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                        {console.log("rso event selected:", state.RSOEvents[this.props.index])}
                        <EventInfoHeader event={state.RSOEvents[this.props.index]}/>
                        <Comments username={this.props.username} comments={this.props.comments} event={state.RSOEvents[this.props.index]}/>
                        <MapContainer event={state.RSOEvents[this.props.index]}/>
                    </div>
                    : null
                }
            </div>
        );
    }
}
