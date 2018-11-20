import React, { Component } from 'react';
import Header from './Header'

export default class JoinRSO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rso_name: ''
        }
    }

    handleChangeLogin = (event) => {
        this.setState({rsoname: event.target.value});
    }


    handleSubmit = (event) => {
        console.log(this.state.rso_name);
        fetch('http://localhost:3001/join-rso', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
          }),
        });
    }

    render() {

        return (
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
        );
    }
}
