import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function useRegister() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function postRegister() {
    axios
      .post(`${config.backendUrl}/users/register`, {
        email,
        username,
        password,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return [setEmail, setUsername, setPassword, postRegister];
}
