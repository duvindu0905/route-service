const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Database connection
const sampleRoutes = require('./routes/sampleRoute'); // Routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Base route for health check
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Route Service API!' });
});

// Use routes
app.use('/route-service', sampleRoutes);

// Fallback route for undefined paths
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
