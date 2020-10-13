import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useRegister from '../hooks/useRegister';

export default function Register() {
  const [setEmail, setUsername, setPassword, postRegister] = useRegister();

  return (
    <div className="input-form" onSubmit={event => postRegister(event)}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type your email"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Express yourself"
            onChange={event => {
              setUsername(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a safe password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
