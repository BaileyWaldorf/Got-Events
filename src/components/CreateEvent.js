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
            userType: this.props.userType
        }
    }

    content = () => {
        return(
            <div className="LoginContainer" style={{marginLeft: '30%', marginRight: '30%', width:"75%", display: "flex", flexDirection: "column", justifyItems:"center", alignItems: "center", marginTop:"5%", maxWidth:"600px", minHeight:"400px", height:"40%"}}>
                <div style={{fontSize:"30px", color:"#CCC", alignSelf: "center"}}>
                    CREATE EVENT
                </div>
                <input style={{minWidth:"440px", marginTop:"5%"}} className="InputBox" placeholder="Event Name" />
                <input style={{marginTop:"3%", width:"440px", minHeight:"10px", alignContent:"top", justifyContent:"top", justifyItems: "top"}} className="InputBox" placeholder="Description" />
                <input placeholder="Location" className="InputBox" style={{width:"440px", marginTop:"3%"}} />

                <NavDropdown title="Social" /*Event type*/ style={{marginTop:"3%", listStyle:"none"}}>
                    <MenuItem>Fundraising</MenuItem>
                    <MenuItem>Sports</MenuItem>
                    <MenuItem>Concerts</MenuItem>
                    <MenuItem>Tech Talks</MenuItem>
                    <MenuItem>Social</MenuItem>
                </NavDropdown>

                <NavDropdown title="Public" /*Visibility*/ style={{marginTop:"3%", listStyle:"none"}}>
                    <MenuItem>Private</MenuItem>
                    <MenuItem>Public</MenuItem>
                </NavDropdown>

                <button className="LoginButton" style={{marginTop:"3%", marginBottom:"3%"}}>Submit</button>
            </div>
        )
    }

    render(){

        return(
            <div style={{justifyItems:"center", alignItems:"center"}}>
                {this.props.state.authenticated
                    ? this.content()
                    : <h2 style={{paddingTop: '200px'}}>Please Login to create an event!</h2>
                }
            </div>
        );
    }
}
