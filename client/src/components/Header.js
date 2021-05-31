import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import Home from '../pages/Home';
import About from '../pages/About';
import Anime from '../pages/Anime';
import Manga from '../pages/Manga';

import Modals from '../components/Modals';

class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="/" style={{fontWeight:"bold", fontFamily:"Helvetica"}}>Nekome</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Catalog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/anime">Anime</NavDropdown.Item>
                    <NavDropdown.Item href="/manga">Manga</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-warning">Search</Button>
                </Form>
                
                    <Modals/>
                
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/anime" component={Anime} />
                    <Route path="/manga" component={Manga} />
                </Switch>
            </Router>
            </>
        )
    }
}

export default Header;