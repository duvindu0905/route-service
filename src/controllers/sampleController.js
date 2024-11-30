const Route = require('../models/sampleModel'); // Import the Route model

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch routes', error: err.message });
  }
};

// Get a route by routeNumber
exports.getRouteByNumber = async (req, res) => {
  try {
    const route = await Route.findOne({ routeNumber: req.params.routeNumber });
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

    if (!routeId || !routeNumber || !routeName || !startLocation || !endLocation || !travelDistance || !travelDuration) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newRoute = new Route({
      routeId,
      routeNumber,
      routeName,
      startLocation,
      endLocation,
      travelDistance,
      travelDuration,
    });

    const savedRoute = await newRoute.save();
    res.status(201).json(savedRoute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create route', error: err.message });
  }
};

exports.deleteRouteByRouteNumber = async (req, res) => {
    try {
      const route = await Route.findOneAndDelete({ routeNumber: req.params.routeNumber });
      if (!route) {
        return res.status(404).json({ message: 'Route not found' });
      }
      res.status(204).send(); // No Content
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete route', error: err.message });
    }
  };
