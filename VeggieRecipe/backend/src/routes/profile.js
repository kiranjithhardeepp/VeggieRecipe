const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected profile route
router.get('/profile', authMiddleware, (req, res) => {
  // This route will be protected by the authMiddleware
  res.json({
    message: 'This is a protected profile route',
    user: req.user // user data attached to the request by JWT
  });
});

module.exports = router;
