import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import Login from './Login';
import Register from './Register';
import Unmoderated from './UnmoderatedQuestions';

export default function Header() {
  return (
    <Router>
      <main>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/unmoderated">Unmoderated</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/unmoderated">
            <Unmoderated />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
