import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Header from './Header'

export default class CreateEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            university: this.props.university,
            userType: this.props.userType,
            name: '',
            description: '',
            location: '',
            category: 0,
            private: false,
            event_time: '1970-01-01 00:00:00',
            rating: 0.0,
            contact_num: '',
            rso_id: null
        }
    }

    createEvent = () => {
      var username = this.props.state.user[0] !== undefined ? this.props.state.user[0].username : null
      var email = this.props.state.user[0] !== undefined ? this.props.state.user[0].email : null
      var university = this.props.state.user[0] !== undefined ? this.props.state.user[0].university : null
      var userType = this.props.state.user[0] !== undefined ? this.props.state.user[0].u_type : null
        fetch('http://localhost:3001/create-event', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                location: this.state.location,
                category: this.state.category,
                private: this.state.private,
                event_time: this.state.event_time,
                rating: 5,
                university_name: university,
                contact_email: email,
                contact_num: this.state.contact_num,
                rso_id: 11
            }),
        })
    };

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleChangeLocation = (event) => {
        this.setState({ location: event.target.value });
    }

    handleChangeCategory = (event) => {
        this.setState({ category: event.target.value });
    }

    handleChangePrivate = (event) => {
        this.setState({ private: event.target.value });
    }

    handleChangeEventTime = (event) => {
        this.setState({ event_time: event.target.value });
    }

    handleChangeRating = (event) => {
        this.setState({ rating: event.target.value });
    }

    handleChangeContactNum = (event) => {
        this.setState({ contact_num: event.target.value });
    }

    content = () => {
        return(
            <div style={{display:"flex", flexDirection:"column", justifyItems:"center", alignItems:"center"}}>
                <div className="LoginContainer" style={{width:"75%", display: "flex", flexDirection: "column", alignItems: "center", marginTop:"5%", maxWidth:"600px", minHeight:"400px", height:"40%"}}>
                    <div style={{fontSize:"30px", color:"#CCC", alignSelf: "center"}}>
                        CREATE EVENT
                    </div>
                    <input style={{ minWidth: "440px", marginTop: "5%" }} className="InputBox" placeholder="Event Name" onChange={this.handleChangeName} />
                    <input style={{ marginTop: "3%", width: "440px", minHeight: "10px", alignContent: "top", justifyContent: "top", justifyItems: "top" }} className="InputBox" placeholder="Description" onChange={this.handleChangeDescription}/>
                    <input placeholder="Location" className="InputBox" style={{ width: "440px", marginTop: "3%" }} onChange={this.handleChangeLocation}/>
                    <input style={{ minWidth: "440px", marginTop: "5%" }} className="InputBox" placeholder="YYYY-MM-DD HH:MM:SS" onChange={this.handleChangeEventTime}/>

                    <input placeholder="Rating 0 -> 5" className="InputBox" style={{ width: "440px", marginTop: "3%" }} onChange={this.handleChangeRating}/>
                    <input placeholder="Contact Number:" className="InputBox" style={{ width: "440px", marginTop: "3%" }} onChange={this.handleChangeContactNum}/>
                    {/*<input placeholder="RSO Name" className="InputBox" style={{ width: "440px", marginTop: "3%" }} onChange={this.handleChangeRSO_ID}/>*/}

                    <NavDropdown title="Social" /*Event type*/ style={{ marginTop: "3%", listStyle: "none" }} onChange={this.handleChangeCategory}>
                        <MenuItem>Fundraising</MenuItem>
                        <MenuItem>Sports</MenuItem>
                        <MenuItem>Concerts</MenuItem>
                        <MenuItem>Tech Talks</MenuItem>
                        <MenuItem>Social</MenuItem>
                    </NavDropdown>

                    <NavDropdown title="Public" /*Visibility*/ style={{ marginTop: "3%", listStyle: "none" }} onChange={this.handleChangePrivate}>
                        <MenuItem>Private</MenuItem>
                        <MenuItem>Public</MenuItem>
                    </NavDropdown>

                    <button className="LoginButton" style={{marginTop:"3%", marginBottom:"3%"}} onClick={this.createEvent}>Submit</button>
                </div>
            </div>
        )
    }

    render(){

        return(
            <div>
                {this.props.state.authenticated
                    ? this.content()
                    : <h2 style={{paddingTop: '200px'}}>Please Login to create an event!</h2>
                }
            </div>
        );
    }
}
