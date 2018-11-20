import React, { Component } from 'react';
import Header from './Header'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            university: '',
            u_type: '',
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

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangeUniversity = (event) => {
        this.setState({ university: event.target.value });
    }

    handleChangeUserType = (event) => {
        this.setState({ u_type: event.target.value });
        this.setState({ buttonEnabled: false });
    }

    registerUser = () => {
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.university);
        console.log(this.state.u_type);

        fetch('http://localhost:3001/insert-user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                u_password: this.state.password,
                email: this.state.email,
                university: this.state.university,
                u_type: this.state.u_type,
            }),
        });

        this.setState({ buttonEnabled: false });
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
                        <input onChange={this.handleChangeEmail} className="LoginInput" placeholder="Email" type='email'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangeUniversity} className="LoginInput" placeholder="University"></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangeUserType} className="LoginInput" placeholder="User Type "></input>
                    </div>
                    <div>
                        <button onClick={this.registerUser}  className="LoginButton" style={{marginTop:"35%"}}>Register</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}