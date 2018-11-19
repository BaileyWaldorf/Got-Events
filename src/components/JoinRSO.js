import React, { Component } from 'react';
import Header from './Header'

export default class JoinRSO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsoname: '',
            buttonEnabled: true,
            authenticated: 'false'
        }
    }

    handleChangeLogin = (event) => {
        this.setState({rsoname: event.target.value});
    }


    handleSubmit = (event) => {
        //let temp_usrname = this.state.username;
        //let temp_passwrd = this.state.password;

        this.setState({buttonEnabled: false});

        console.log("submit")

    }

    render() {

        return (
            <div>
            <div>
                <Header></Header>
            <div className="LoginPage">
                <div className="LoginContainer">
                    <h1 style={{color:"white", marginTop:'5%', paddingBottom:'35%'}}>Join RSO</h1>
                    <div>
                        <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="RSO Name..." type='text'></input>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}  className="LoginButton">Join RSO</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
