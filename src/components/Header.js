import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Login from 'process.env.PUBLIC_URL + /Login';

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
                            <MenuItem eventKey={3.1}><Link to={'/profile'}>Account</Link></MenuItem>
                            <MenuItem divider={true}/>
                            <MenuItem eventKey={3.2}><Link to={'/'}>Sign Out</Link></MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight={true}>
                        <NavItem eventKey={1} href="#">
                            <Link to={'/'}>Login</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to={'/register'}>Register</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
