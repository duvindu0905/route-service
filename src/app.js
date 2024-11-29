const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import database connection
const sampleRoutes = require('./routes/sampleRoute'); // Import routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Root route for health check
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Route Service API!' });
});

// Register sample routes under /route-service
app.use('/route-service', sampleRoutes);

// Fallback route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
