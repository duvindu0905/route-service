const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema(
  {
    routeId: {
      type: Number,
      required: [true, 'Route ID is required'],
      unique: true,
      min: [1, 'Route ID must be greater than 0'],
    },
    routeNumber: {
      type: String,
      required: [true, 'Route Number is required'],
      trim: true,
      match: [/^[A-Z0-9\-]+$/, 'Route Number must be alphanumeric with optional hyphens'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true, // Prevent modification after creation
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    routeName: {
      type: String,
      required: [true, 'Route Name is required'],
      trim: true,
      minlength: [3, 'Route Name must be at least 3 characters long'],
    },
    startLocation: {
      type: String,
      required: [true, 'Start Location is required'],
      trim: true,
    },
    endLocation: {
      type: String,
      required: [true, 'End Location is required'],
      trim: true,
    },
    travelDistance: {
      type: String,
      required: [true, 'Travel Distance is required'],
      trim: true,
      match: [/^\d+(\.\d+)?\s?(km|miles)$/, 'Travel Distance must be a valid number followed by "km" or "miles"'],
    },
    travelDuration: {
      type: String,
      required: [true, 'Travel Duration is required'],
      trim: true,
      match: [/^\d+\s?(minutes|hours)$/, 'Travel Duration must be a valid number followed by "minutes" or "hours"'],
    },
  },
  {
    timestamps: true, // Automatically manage `createdAt` and `updatedAt`
  }
);

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
