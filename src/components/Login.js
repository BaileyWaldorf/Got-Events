import React, { Component } from 'react';
import Header from './Header'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonEnabled: true,
            authenticated: 'false'
        }
    }

    handleChangeLogin = (event) => {
        this.setState({username: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        //let temp_usrname = this.state.username;
        //let temp_passwrd = this.state.password;

        this.setState({buttonEnabled: false});

        console.log("submit")

    }

    render() {

        const registerLink = <a href={"RegisterPage"}>Register here</a>

        return (
            <div>
            <div>
                <Header></Header>
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
                    <div style={{ color: 'white', paddingTop:'35%' }}>Don't have an account yet? {registerLink}</div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
