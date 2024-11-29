const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json'); // Import the Swagger JSON file
const connectDB = require('./config/db');
const routes = require('./routes/sampleRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routes);

// Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Default fallback route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
