import React, {Component } from 'react';

export default class UserComment extends Component {
    constructor(props) {
        super(props);
        this.state ={
            text: this.props.text,
            user: this.props.user
        }
    }

    render() {

        return(
            <div style={{width:'70%', height: '125px', backgroundColor:'grey'}}>
                {this.state.user} says: 
                <div style={{marginTop:'15px'}}>
                    {this.state.text}
                </div>
            </div>
        );
    }
}