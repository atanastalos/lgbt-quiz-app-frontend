import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Register() {
  return (
    <div className="input-form">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Express yourself" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Create a safe password" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
