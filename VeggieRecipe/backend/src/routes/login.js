// src/routes/login.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const router = express.Router();

router.post('/login',async (req, res) => {
  console.log("POST request received at /api/login"); // Log when the route is hit
  const { email, password } = req.body;
  console.log("Received login data:", req.body);

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password',user });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'mySuperSecretKey12345678', { expiresIn: '1h' });

    return  res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Error during login:',err);
    return res.status(500).json({ message: 'Server error' , error: err.message});
  }
});

module.exports = router;
