const mongoose = require('mongoose');

// Define schema for the Route model
const routeSchema = new mongoose.Schema(
  {
    routeId: { type: Number, required: true, unique: true }, // Unique route identifier
    routeNumber: { type: String, required: true, unique: true }, // Unique route number
    routeName: { type: String, required: true }, // Route name
    startLocation: { type: String, required: true }, // Starting location
    endLocation: { type: String, required: true }, // Ending location
    travelDistance: { type: String, required: true }, // Travel distance
    travelDuration: { type: String, required: true }, // Travel duration
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model('Route', routeSchema, 'routes'); // Explicitly set collection name
