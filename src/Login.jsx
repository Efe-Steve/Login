import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (email === 'user@example.com' && password === 'password') ||
      (email === 'Efemena@gmail.com' && password === 'mena1234')
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('TodoList');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='Login-container'>
      <h1>Todo List</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
