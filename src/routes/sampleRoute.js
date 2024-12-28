const express = require('express');
const {
  getAllRoutes,
  getRouteByNumber,
  getRouteByRouteId,
  createRoute,
  deleteRouteByRouteNumber
} = require('../controllers/sampleController');

const router = express.Router();

// Import the authorization middleware
const authorizeAdmin = require('../middleware/authorizeAdmin');

// Define routes with authorization middleware applied
router.get('/routes', getAllRoutes);  // Get all routes - Accessible to all authenticated users
router.get('/routes/:routeNumber', getRouteByNumber); // Get route by routeNumber - Accessible to all authenticated users

// Create a new route - Only accessible by ntcAdmin
router.post('/routes', authorizeAdmin, createRoute);  // Apply the middleware to the post request

// Delete a route by routeNumber - Only accessible by ntcAdmin
router.delete('/routes/:routeNumber', authorizeAdmin, deleteRouteByRouteNumber);  // Apply the middleware to the delete request

module.exports = router;

