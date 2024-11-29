const express = require('express');
const {
  getAllRoutes,
  getRouteById,
  getRouteByRouteId,
  createRoute,
  deleteRoute
} = require('../controllers/sampleController');

const router = express.Router();

// Routes for managing routes
router.get('/routes', getAllRoutes); // Get all routes
router.get('/routes/:id', getRouteById); // Get a specific route by MongoDB _id
router.get('/routes/routeId/:routeId', getRouteByRouteId); // Get a specific route by routeId
router.post('/routes', createRoute); // Create a new route
router.delete('/routes/:id', deleteRoute); // Delete a route by MongoDB _id

module.exports = router;
