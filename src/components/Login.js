import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
var md5 = require('js-md5');


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            authenticated: false,
            user: [],
            redirect: false
        }
    }

    handleChangeLogin = (event) => {
        this.setState({username: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    // checkLogin = () => {
    //     if(md)
    //     handleSubmit(event);
    // }

    handleSubmit = (event) => {
        console.log("Checking against" + md5(this.state.password))
        fetch(`http://localhost:3001/login?username=${this.state.username}&u_password=${md5(this.state.password)}`)
        .then(response => response.json())
        .then(response => {
            console.log("user: ", response)
            this.setState({user: response}, () => {
                if(this.state.user !== []) {
                    this.setState({authenticated: true, redirect: true}, () => {
                        console.log("logged in: ", this.state.authenticated)
                        this.props.handleLogin(this.state.user);
                    });
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (
            <div className="LoginPage">
                <div className="LoginContainer">
                    <h1 style={{color:"white", marginTop:'5%', paddingBottom:'35%'}}>Got-Events</h1>
                    <div>
                        <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="Login" type='text'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} className="LoginInput" placeholder="Password" type='password'></input>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}  className="LoginButton">Log In</button>
                    </div>
                    <div style={{ color: 'white', paddingTop:'35%' }}>Don't have an account yet?
                        <Link to="/register" >
                            {" "} Register Here!
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
