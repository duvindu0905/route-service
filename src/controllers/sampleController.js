const Route = require('../models/sampleModel'); // Import the Route model

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().select('-_id -__v'); // Exclude `_id` and `__v`
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch routes', error: err.message });
  }
};


// Get a route by routeNumber
exports.getRouteByNumber = async (req, res) => {
  try {
    
    const route = await Route.findOne({ routeNumber: req.params.routeNumber }).select('-_id -__v'); // Exclude `_id` and `__v`
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

    // Check if the routeNumber or routeId already exists
    const existingRoute = await Route.findOne({ $or: [{ routeNumber }, { routeId }] });
    if (existingRoute) {
      return res.status(400).json({ message: 'Route with this routeNumber or routeId already exists' });
    }

    // Create the route
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
    const response = savedRoute.toObject(); // Convert the document to a plain object
    delete response._id; // Remove `_id`
    delete response.__v; // Remove `__v`

    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create route', error: err.message });
  }
};

// Delete a route by routeNumber
exports.deleteRouteByRouteNumber = async (req, res) => {
  try {
    const route = await Route.findOneAndDelete({ routeNumber: req.params.routeNumber });
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json({ message: 'Route deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete route', error: err.message });
  }
};
