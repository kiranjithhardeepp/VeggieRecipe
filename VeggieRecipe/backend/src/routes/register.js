const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/User'); // Import User model
const router = express.Router();
const jwt = require('jsonwebtoken');

// Registration Endpoint
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log("Received data:", req.body); 

 // Validate input
 if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    console.log("User saved:", newUser);
    // Respond back
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error('Error during registration:',err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
