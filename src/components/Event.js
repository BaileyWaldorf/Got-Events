import React, {Component} from 'react';

export default class RSOs extends Component {
    render() {
        return (
            <button className="eventCard" onClick={this.props.click}>
                <h4>
                    <span style={{float: "left"}}>{this.props.event.name}</span>
                    <span style={{float: "right"}}>{this.props.event.date}</span>
                </h4>
                <br /><br />
                <p style={{textAlign: "left"}}>{this.props.event.description}</p>
            </button>
        );
    }
}
