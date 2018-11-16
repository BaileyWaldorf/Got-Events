import React, { Component } from 'react';
import Header from './Header'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            authenticated: ''

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
        //let temp_usrname = this.state.username;
        //let temp_passwrd = this.state.password;

        this.setState({ buttonEnabled: false });

        console.log("submit")

    }

    button1Click = (event) => {
        this.setState({ buttonColor1: 'black', buttonColor2: 'lightslategray', buttonColor3: 'lightslategray', schoolPlaceholder: 'school', IsSuperAdmin: 'hidden' })
    }

    button2Click = (event) => {
        this.setState({ buttonColor1: 'lightslategray', buttonColor2: 'black', buttonColor3: 'lightslategray', schoolPlaceholder: 'school', IsSuperAdmin: 'hidden' })
    }

    button3Click = (event) => {
        this.setState({ buttonColor1: 'lightslategray', buttonColor2: 'lightslategray', buttonColor3: 'black', schoolPlaceholder: 'Create school', IsSuperAdmin: 'visible' })
    }

    render() {

        const registerLink = <a href={"RegisterPage"}>Register here</a>

        return (
            <div>
                <div>
                    <Header></Header>
                    <div className="LoginPage">
                        <div className="LoginContainer">
                            <h1 style={{ color: "white", marginTop: '5%', paddingBottom: '15%' }}>Register</h1>
                            <div>
                                <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="Username" type='text'></input>
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
                            <div style={{ marginTop: '8%', visibility: this.state.failedlLogin }}>FAILED</div>
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
