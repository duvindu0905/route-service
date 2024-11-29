const express = require('express');
const {
  getAllRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute
} = require('../controllers/sampleController');

const router = express.Router();

// Routes for managing routes
router.get('/routes', getAllRoutes); // Get all routes
router.get('/routes/:id', getRouteById); // Get a specific route by ID
router.post('/routes', createRoute); // Create a new route
router.put('/routes/:id', updateRoute); // Update a route by ID
router.delete('/routes/:id', deleteRoute); // Delete a route by ID

module.exports = router;
