import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {


    render() {
        return (
            <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Got Events?</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav style={{display:"flex", flexDirection:"row"}}>
                        <NavItem eventKey={1} href="#">
                            Create
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            My Events
                        </NavItem>
                        <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>My Events</MenuItem>
                            <MenuItem eventKey={3.2}>My Organizations</MenuItem>
                            <MenuItem eventKey={3.3}>Account</MenuItem>
                            <MenuItem divider="divider"/>
                            <MenuItem eventKey={3.3}>Sign Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight="pullRight">
                        <NavItem eventKey={1} href="#">
                            Login
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Register
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
