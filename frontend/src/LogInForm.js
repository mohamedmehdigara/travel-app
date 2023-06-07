import React, { useState } from 'react';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    // Create an object with the user login data
    const userData = { email, password };

    try {
      // Make a POST request to the login route on your server
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle the response
      if (response.ok) {
        const { token } = await response.json();
        // Store the JWT token in local storage or cookies
        localStorage.setItem('token', token);
        // TODO: Handle successful login (e.g., redirect the user)
      } else {
        // TODO: Handle login error (e.g., display error message)
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // TODO: Handle login error
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;