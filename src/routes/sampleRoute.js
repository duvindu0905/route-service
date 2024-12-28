const express = require('express');
const authorizeAdmin = require('../middleware/authorizeAdmin'); // Correct path
const { getAllRoutes, getRouteByNumber, createRoute, deleteRouteByRouteNumber } = require('../controllers/sampleController');

const router = express.Router();

// Use the middleware for the routes that require admin authorization
router.get('/routes', authorizeAdmin, getAllRoutes);  // Get all routes (requires admin)
router.get('/routes/:routeNumber', authorizeAdmin, getRouteByNumber); // Get route by routeNumber (requires admin)
router.post('/routes', authorizeAdmin, createRoute); // Create a new route (requires admin)
router.delete('/routes/:routeNumber', authorizeAdmin, deleteRouteByRouteNumber); // Delete a route (requires admin)

module.exports = router;


