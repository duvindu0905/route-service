const jwt = require('jsonwebtoken');

// Middleware to check if the user is an admin
const authorizeAdmin = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Access denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded JWT to the request object

    // Check if the user's role is 'ntcAdmin'
    if (req.user.role !== 'ntcAdmin') {
      return res.status(403).json({ message: 'Access denied: Insufficient role' });
    }

    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authorizeAdmin;

