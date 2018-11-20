import React, { Component } from 'react';
import Header from './Header'

export default class JoinRSO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rsoname: '',
        }
    }

    handleChangeLogin = (event) => {
        this.setState({rsoname: event.target.value});
    }


    handleSubmit = (event) => {
      var username = this.props.state.user[0] !== undefined ? this.props.state.user[0].username : null
      var email = this.props.state.user[0] !== undefined ? this.props.state.user[0].email : null
      var university = this.props.state.user[0] !== undefined ? this.props.state.user[0].university : null
      var userType = this.props.state.user[0] !== undefined ? this.props.state.user[0].u_type : null
      var user = '';
        fetch('http://localhost:3001/join-rso', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rso_name: this.state.rsoname,
            university: university,
            username: username,
          }),
        });
    }

    content = () => {
        return(
            <div className="LoginContainer">
                <h1 style={{color:"white", marginTop:'5%', paddingBottom:'35%'}}>Join RSO</h1>
                <div>
                    <input onChange={this.handleChangeLogin} className="LoginInput" placeholder="RSO Name..." type='text'></input>
                </div>
                <div>
                    <button onClick={this.handleSubmit}  className="LoginButton">Join RSO</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="LoginPage">
                {this.props.state.authenticated
                    ? this.content()
                    : <h2 style={{paddingTop: '200px'}}>Please Login to create an event!</h2>
                }
            </div>
        );
    }
}
