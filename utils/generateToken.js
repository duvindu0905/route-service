const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId, role) => {
  const payload = { userId, role };  // Include the user role in the payload
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;
