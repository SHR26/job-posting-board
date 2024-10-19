// server/models/Job.js
const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
    enum: ['Entry Level', 'Mid Level', 'Senior Level'], // Possible experience levels
    required: true,
  },
  candidate: {
    type: String, // You may want to change this to a more appropriate type based on your needs
  },
  endDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

// Create the Job model
const Job = mongoose.model('Job', jobSchema);

// Export the model
module.exports = Job;
