const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Get the JWT from the request headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // If no token is provided, return an authentication error
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, 'your-secret-key');

    // Attach the decoded user data to the request object for future use
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid, return an authentication error
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateToken;
