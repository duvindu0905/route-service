// src/config/db.js
require('dotenv').config();  // Ensure dotenv is loading environment variables from .env
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Log the Mongo URI to check if it's loaded
    console.log('Mongo URI:', process.env.MONGO_URI_ROUTE);  // This will print the Mongo URI to the console

    const mongoURI = process.env.MONGO_URI_ROUTE;

    if (!mongoURI) {
      throw new Error("MONGO_URI_ROUTE is not defined in .env");  // If it's undefined, this will throw an error
    }

    mongoose.set('strictQuery', true);  // Enable strict query for Mongoose 6+

    // Connect to MongoDB without deprecated options
    await mongoose.connect(mongoURI);

    console.log('RouteService MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);  // Exit process with failure
  }
};
module.exports = connectDB;
