import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component {


    render() {
        return (
            <Navbar inverse={true} collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Got Events?</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav style={{display:"flex", flexDirection:"row"}}>
                        <NavItem eventKey={1} href="#">
                            <Link to='/createEvents' >Create</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to='/myEvents' >My Events</Link>
                        </NavItem>
                        <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>My Organizations</MenuItem>
                            <MenuItem eventKey={3.2}>Account</MenuItem>
                            <MenuItem divider={true}/>
                            <MenuItem eventKey={3.3}>Sign Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight={true}>
                        <NavItem eventKey={1} href="#">
                            <Link to={'/'}>Login</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to={'register'}>Register</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
