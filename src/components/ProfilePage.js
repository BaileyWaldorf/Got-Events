import React, { Component } from 'react';
import Header from './Header'
export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    content = () => {
        var username = this.props.state.user[0] !== undefined ? this.props.state.user[0].username : null
        var email = this.props.state.user[0] !== undefined ? this.props.state.user[0].email : null
        var university = this.props.state.user[0] !== undefined ? this.props.state.user[0].university : null
        var userType = this.props.state.user[0] !== undefined ? this.props.state.user[0].u_type : null
        var user = '';
        if(userType == 0) user = 'SuperAdmin';
        if(userType == 1) user = 'Admin';
        if(userType == 2) user = 'Student';
        return (
            <div className="LoginPage">
                <div className="LoginContainer">
                    <h1 style={{ color: "white", marginTop: '5%', paddingBottom: '35%' }}>Your Profile</h1>
                    <div style={{ color: 'white', fontSize:22 }}>
                        Username: {username}
                    </div>
                    <div style={{ color: 'white', fontSize:22 }}>
                        Email: {email}
                    </div>
                    <div style={{ color: 'white', fontSize:22  }}>
                        University: {university}
                    </div>
                    <div style={{ color: 'white', fontSize:22 }}>
                        User type: {user}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.state.authenticated
                    ? this.content()
                    : <h2 style={{paddingTop: '200px'}}>Please Login to view your profile!</h2>
                }
            </div>
        );
    }
}
