import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Login from 'process.env.PUBLIC_URL + /Login';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse={true} fluid collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Got Events?</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav style={{display:"flex", flexDirection:"row"}}>
                        <LinkContainer to="/my-events">
                            <NavItem>My Events</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/create-event">
                            <NavItem>Create Event</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/create-rso">
                            <NavItem>Create RSO</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/join-rso">
                            <NavItem>Join RSO</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <NavItem>Profile</NavItem>
                        </LinkContainer>
                    </Nav>
                    {!this.props.authenticated
                        ? <Nav pullRight={true}>
                            <LinkContainer to="/register">
                                <NavItem>Register</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <NavItem>Login</NavItem>
                            </LinkContainer>
                        </Nav>
                    : <Nav pullRight={true}>
                        <NavItem onClick={this.props.handleLogout}>Logout</NavItem>
                    </Nav>}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
