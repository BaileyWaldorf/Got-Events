import React, {Component} from 'react';
import Event from '../components/Event';
import { ButtonGroup, Button } from 'react-bootstrap';

export default class EventsContainer extends Component {

    render() {
        return (
            <div className="events-container">
                <ButtonGroup style={{padding: '20px'}}>
                    <Button onClick={this.props.showPublicEvents}>Public</Button>
                    <Button onClick={this.props.showPrivateEvents}>Private</Button>
                    <Button onClick={this.props.showRSOEvents}>RSO</Button>
                </ButtonGroup>
                {this.props.state.showPublicEvents
                    ? this.props.state.publicEvents.map((event, index) =>
                    <Event event={event} index={index} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }

                {this.props.state.showPrivateEvents
                    ? this.props.state.privateEvents.map((event, index) =>
                    <Event event={event} index={index} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }

                {this.props.state.showRSOEvents
                    ? this.props.state.RSOEvents.map((event, index) =>
                    <Event event={event} index={index} selectEvent={this.props.selectEvent} />
                    )
                    : null
                }
            </div>
        );
    }
}
