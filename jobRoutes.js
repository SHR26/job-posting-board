const express = require('express');
const router = express.Router();
const Job = require('../models/Job');  // Assuming you have a Job model
const authMiddleware = require('../middleware/authMiddleware');  // Middleware for JWT authentication

// POST /api/jobs
router.post('/', authMiddleware, async (req, res) => {
    const { title, description, experienceLevel, candidate, endDate } = req.body;

    try {
      const job = new Job({
        title,
        description,
        experienceLevel,
        candidate,
        endDate,
        user: req.user.id // Assuming the authenticated user is creating the job
      });

    await job.save();
    res.json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
