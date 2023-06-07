const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateToken = require('./authMiddleware');


// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
app.get('/protected', authenticateToken, (req, res) => {
    // Access the authenticated user data from req.user
    const userId = req.user.userId;
  
    // Return the protected data
    res.json({ message: 'This is a protected route', userId });
  });

app.post('/register', (req, res) => {
    // Get the registration details from the request body
    const { username, email, password } = req.body;
  
    // TODO: Validate the registration details (e.g., check for unique email)
  
    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        // TODO: Save the user to the database
  
        // Generate a JWT token
        const token = jwt.sign({ userId: 'user123' }, 'your-secret-key');
  
        // Return the token in the response
        res.json({ token });
      }
    });
  });
  
  // User login route
  app.post('/login', (req, res) => {
    // Get the login credentials from the request body
    const { email, password } = req.body;
  
    // TODO: Retrieve the user from the database based on the email
  
    // TODO: Compare the password with the stored hashed password
    bcrypt.compare(password, storedHashedPassword, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        res.status(500).json({ error: 'An error occurred' });
      } else if (!result) {
        // Passwords do not match
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        // Generate a JWT token
        const token = jwt.sign({ userId: 'user123' }, 'your-secret-key');
  
        // Return the token in the response
        res.json({ token });
      }
    });
  });
  
