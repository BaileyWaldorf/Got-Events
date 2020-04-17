import React, { Component } from 'react';
import { Redirect } from 'react-router';
var md5 = require('js-md5');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            userType: '',
            password: '',
            rePassword: '',
            school: '',
            location: '',
            description: '',
            buttonEnabled: true,
            IsSuperAdmin: 'hidden',
            schoolPlaceholder: 'school',
            buttonColor1: 'lightslategray',
            buttonColor2: 'lightslategray',
            buttonColor3: 'lightslategray',
            failedlLogin: 'hidden',
            redirect: false
        }
    }

    handleChangeLogin = (event) => {
        this.setState({ username: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleChangerePassword = (event) => {
        this.setState({ rePassword: event.target.value });
    }

    handleChangeSchool = (event) => {
        this.setState({ school: event.target.value });
    }

    handleChangeLocation = (event) => {
        this.setState({ location: event.target.value });
    }

    handleChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = (event) => {

        console.log("Clicked")
        let hashpass = md5(this.state.password)
        console.log(hashpass)

        //let temp_usrname = this.state.username;
        //let temp_passwrd = this.state.password;
        if(this.state.userType === 0)
        {
          fetch('http://localhost:3001/create-university', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.school,
              location: this.state.location,
              description: this.state.description,
            }),
          });
        }

        fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: hashpass,
            email: this.state.email,
            university: this.state.school,
            u_type: this.state.userType,
          }),
        });
        console.log("submit")

    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    button1Click = (event) => {
        this.setState({ buttonColor1: 'black', buttonColor2: 'lightslategray', buttonColor3: 'lightslategray', schoolPlaceholder: 'school', IsSuperAdmin: 'hidden', userType:2 })
    }

    button2Click = (event) => {
        this.setState({ buttonColor1: 'lightslategray', buttonColor2: 'black', buttonColor3: 'lightslategray', schoolPlaceholder: 'school', IsSuperAdmin: 'hidden', userType:1 })
    }

    button3Click = (event) => {
        this.setState({ buttonColor1: 'lightslategray', buttonColor2: 'lightslategray', buttonColor3: 'black', schoolPlaceholder: 'Create school', IsSuperAdmin: 'visible', userType:0 })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (
            <div>
                <div>

                    <div className="LoginPage">
                        <div className="LoginContainer">
                            <h1 style={{ color: "white", marginTop: '5%', paddingBottom: '5%' }}>Register</h1>
                            <div>
                                <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="Username" type='text'></input>
                            </div>
                            <div>
                                <input onChange={this.handleChangeEmail} className="LoginInput" placeholder="email" type='text'></input>
                            </div>
                            <div>
                                <input onChange={this.handleChangePassword} className="LoginInput" placeholder="Password" type='password'></input>
                            </div>
                            <div>
                                <input onChange={this.handleChangerePassword} className="LoginInput" placeholder="Confirm Password" type='password'></input>
                            </div>
                            <div style={{ marginTop: '4%' }}>
                                <button onClick={this.button1Click} style={{ backgroundColor: this.state.buttonColor1, borderWidth: '1px', width: '80px', height: '30px', outlineWidth: '0', alignContent: 'center' }}>Student</button>
                                <button onClick={this.button2Click} style={{ backgroundColor: this.state.buttonColor2, borderWidth: '1px', width: '80px', height: '30px', outlineWidth: '0', alignContent: 'center' }}>Admin</button>
                                <button onClick={this.button3Click} style={{ backgroundColor: this.state.buttonColor3, borderWidth: '1px', width: '100px', height: '30px', outlineWidth: '0', alignContent: 'center' }}>SuperAdmin</button>
                            </div>
                            <div>
                                <input onChange={this.handleChangeSchool} className="LoginInput" placeholder={this.state.schoolPlaceholder}></input> {/*School(all of them), super: school location, description */}
                            </div>
                            <div style={{ visibility: this.state.IsSuperAdmin }}>
                                <input onChange={this.handleChangeLocation} className="LoginInput" placeholder="Location"></input>
                            </div>
                            <div style={{ visibility: this.state.IsSuperAdmin }}>
                                <input onChange={this.handleChangeDescription} className="LoginInput" placeholder="Description"></input>
                            </div>
                            <div style={{ marginTop: '5%', visibility: this.state.failedlLogin }}>FAILED</div>
                            <div>
                                <button onClick={this.handleSubmit} className="LoginButton" style={{ marginTop: "0%" }}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
