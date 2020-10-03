import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <Router>
                <main>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/resume">
                            <Resume/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default Home;
