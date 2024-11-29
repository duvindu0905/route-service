const express = require('express');
const {
  getAllRoutes,
  getRouteByNumber,
  getRouteByRouteId,
  createRoute,
  deleteRoute
} = require('../controllers/sampleController');

const router = express.Router();

// Define routes
router.get('/routes', getAllRoutes); // Get all routes
router.get('/routes/:routeNumber', getRouteByNumber); // Get route by routeNumber
router.post('/routes', createRoute); // Create a new route
router.delete('/routes/:id', deleteRoute); // Delete route by MongoDB _id

module.exports = router;
