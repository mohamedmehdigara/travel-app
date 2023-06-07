import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Create an object with the user registration data
    const userData = { username, email, password };

    try {
      // Make a POST request to the registration route on your server
      const response = await fetch('/register', {
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
        // TODO: Handle successful registration (e.g., redirect the user)
      } else {
        // TODO: Handle registration error (e.g., display error message)
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // TODO: Handle registration error
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
