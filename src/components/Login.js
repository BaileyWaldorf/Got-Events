import React, { Component } from 'react';
import Header from './Header'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonEnabled: true,
            authenticated: 'false',
            user: ""
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
        console.log(this.state.username);
        console.log(this.state.password);
        fetch(`http://localhost:3001/login?username=${this.state.username}&u_password=${this.state.password}`)
       .then(response => response.json())
       .then(response => {
        this.setState({user: response});

       })
       .catch(e => {
         console.log(e);
         return e;
       })
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
                    <div onClick={this.props.linkRegister} style={{ color: 'white', paddingTop:'35%' }}>Don't have an account yet? {registerLink}</div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
