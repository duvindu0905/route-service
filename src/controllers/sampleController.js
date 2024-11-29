const Route = require('../models/sampleModel');

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch routes', error: err.message });
  }
};

// Get a route by ID
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

// Update a route
exports.updateRoute = async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json(updatedRoute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update route', error: err.message });
  }
};

// Delete a route
exports.deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete route', error: err.message });
  }
};
