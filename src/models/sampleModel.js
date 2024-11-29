const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema(
  {
    routeId: { type: Number, required: true, unique: true },
    routeNumber: { type: String, required: true },
    routeName: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    travelDistance: { type: String, required: true },
    travelDuration: { type: String, required: true },
  },
  { timestamps: true } // This will automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model('Route', routeSchema);
