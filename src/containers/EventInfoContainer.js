import React, {Component} from 'react';

export default class EventInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'blah'
        };
    }

    render() {
        console.log("made it")
        return (
            <div className="event-info-container">
                {console.log("hello")}
                {this.props.event.name}
                <br />
                {this.props.event.description}
            </div>
        );
    }
}
