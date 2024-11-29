const Route = require('../models/sampleModel'); // Import the Mongoose model

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch routes', error: err.message });
  }
};

// Get a specific route by MongoDB _id
exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json(route);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch route', error: err.message });
  }
};

// Get a specific route by routeId
exports.getRouteByRouteId = async (req, res) => {
  try {
    const route = await Route.findOne({ routeId: req.params.routeId });
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json(route);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch route', error: err.message });
  }
};

// Create a new route
exports.createRoute = async (req, res) => {
  try {
    const { routeId, routeNumber, routeName, startLocation, endLocation, travelDistance, travelDuration } = req.body;

    // Validate required fields
    if (!routeId || !routeNumber || !routeName || !startLocation || !endLocation || !travelDistance || !travelDuration) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const route = new Route({
      routeId,
      routeNumber,
      routeName,
      startLocation,
      endLocation,
      travelDistance,
      travelDuration,
    });

    const savedRoute = await route.save();
    res.status(201).json(savedRoute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create route', error: err.message });
  }
};

// Delete a route by MongoDB _id
exports.deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(204).send(); // No Content
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete route', error: err.message });
  }
};
