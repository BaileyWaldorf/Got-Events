import React, { Component } from 'react';
import Header from '../components/Header'
//change state changes per input...

export default class CreateRSO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            creator: this.props.username, //make sure these are being passed here
            active: 0,
            university: '',

        }
    }


    handleChangeRSOName = (event) => {
        this.setState({name: event.target.value});
    }

    handleChangeDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleSubmit = (event) => {
      var username = this.props.state.user[0] !== undefined ? this.props.state.user[0].username : null
      var email = this.props.state.user[0] !== undefined ? this.props.state.user[0].email : null
      var university = this.props.state.user[0] !== undefined ? this.props.state.user[0].university : null
      var userType = this.props.state.user[0] !== undefined ? this.props.state.user[0].u_type : null

      //super admin
      if (userType === 0)
        this.setState({active:1})
        //Need to create an endpoint for this!
        fetch('http://localhost:3001/create-rso', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rso_name: this.state.name,
            description: this.state.description,
            admin: username,
            university: university,
            active: this.state.active, //depends on user type? 0 for student/admin, 1 for super admin.

          }),
        });

        console.log("submit")

    }

    content = () => {
        return(
            <div className="LoginPage">
                <div className="LoginContainer">
                    <h1 style={{color:"white", marginTop:'5%', paddingBottom:'35%'}}>Create RSO</h1>
                    <div>
                        <input onChange={this.handleChangeRSOName} className="LoginInput" placeholder="New RSO name" type='text'></input>
                    </div>
                    <div>
                        <input onChange={this.handleChangeDescription} className="LoginInput" placeholder="Description" type='text'></input>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}  className="LoginButton">Create</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.props.state.authenticated
                    ? this.content()
                    : <h2 style={{paddingTop: '200px'}}>Please Login to create an RSO!</h2>
                }
            </div>
        );
    }
}
