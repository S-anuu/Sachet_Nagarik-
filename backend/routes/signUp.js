// routes/signUp.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// GET Sign-Up page
router.get('/sign-up', (req, res) => {
  res.render('signUp', { title: 'Sign Up' });
});

// POST Sign-Up route
router.post('/sign-up', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('address').notEmpty().withMessage('Address is required'),
  body('phoneNumber').isMobilePhone().withMessage('Invalid phone number'),
  body('dateOfBirth').isISO8601().toDate().withMessage('Invalid date of birth format')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, address, phoneNumber, dateOfBirth } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({
      username,
      email,
      password,
      address,
      phoneNumber,
      dateOfBirth
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
