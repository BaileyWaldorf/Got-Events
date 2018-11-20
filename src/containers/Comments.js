import React, {Component} from 'react';
import UserComment from '../components/UserComment'

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state ={
            comments: [],
            users: [],
        };
    }


    render() {

        //Need user, and comment to be passed as props.
        return(
            <div style={{width:'100%', minHeight:'250px', marginTop:'50px' }}>
                <h1>Comments:</h1>

                 {/* { this.props.state.events.map((event, index) =>
                    <UserComment key={event.event_id} event={event} index={index} selectEvent={this.props.selectEvent} />
                    )
                 } */}
            </div>
        );
    }
}