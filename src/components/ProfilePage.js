import React, { Component } from 'react';
import Header from './Header'
export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            university: this.props.university,
            userType: this.props.userType
        }
    }

    render() {

        return (
            <div className="LoginPage">
                <div className="LoginContainer">
                    <h1 style={{ color: "white", marginTop: '5%', paddingBottom: '35%' }}>Your Profile</h1>
                    <div style={{ color: 'white', fontSize:22 }}>
                        Username: {this.state.username}
                    </div>
                    <div style={{ color: 'white', fontSize:22 }}>
                        Email: {this.state.email}
                    </div>
                    <div style={{ color: 'white', fontSize:22  }}>
                        university: {this.state.university}
                    </div>
                    <div style={{ color: 'white', fontSize:22 }}>
                        User type: {this.state.userType}
                    </div>
                </div>
            </div>
        );
    }
}
