import React, {Component} from 'react';

export default class RSOs extends Component {
    render() {
        return (
            <button className="eventCard" onClick={this.props.click}>
                <div>{this.props.event.name}</div>
                <div>{this.props.event.description}</div>
            </button>
        );
    }
}
