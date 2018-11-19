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
                    <h1 style={{color:"white", marginTop:'5%', paddingBottom:'15%'}}>Register</h1>
                    <div>
                        <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="Username" type='text'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} className="LoginInput" placeholder="Password" type='password'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} className="LoginInput" placeholder="Confirm Password" type='password'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} className="LoginInput" placeholder="School"></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} className="LoginInput" placeholder="User Type "></input>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}  className="LoginButton" style={{marginTop:"35%"}}>Register</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}