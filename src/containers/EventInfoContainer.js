import React, {Component} from 'react';

export default class EventInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'blah'
        };
    }

    render() {
        let state = this.props.state;
        return (
            <div className="event-info-container">
                {state.selected == null ? null : state.selected.name}
                <br />
                {state.selected == null ? null : state.selected.description}
            </div>
        );
    }
}
