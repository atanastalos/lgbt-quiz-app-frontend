import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import Login from './Login';
import Register from './Register';

class Header extends Component {

    render() {
        return (
            <Router>
                <main>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Login</Nav.Link>
                            <Nav.Link href="/resume">Register</Nav.Link>
                            <Nav.Link href="/logout"></Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default Header;
