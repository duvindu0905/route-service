const express = require('express');
const connectDB = require('./config/db');
const sampleRoute = require('./routes/sampleRoute');

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api', sampleRoute);

module.exports = app;
