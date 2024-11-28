const express = require('express');
const connectDB = require('./config/db');
const sampleRoute = require('./routes/sampleRoute');

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api', sampleRoute); // Example: All routes under "/api"

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Route Service!'); // Customize this message
});

module.exports = app;
