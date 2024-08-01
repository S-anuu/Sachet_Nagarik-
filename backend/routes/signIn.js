const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); // Adjust the path as needed

// GET route for the sign-in page
router.get('/sign-in', (req, res) => {
  res.render('signIn', { title: 'Sign In', error: null });
});

// POST route for handling sign-in form submission
router.post('/sign-in', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
], async (req, res, next) => {
  // Validate form inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('signIn', { 
      title: 'Sign In',
      error: errors.array()[0].msg 
    });
  }

  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).render('signIn', { 
        title: 'Sign In', 
        error: 'Invalid credentials' 
      });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).render('signIn', { 
        title: 'Sign In', 
        error: 'Invalid credentials' 
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Store token in cookies (optional)
    res.cookie('auth_token', token, { httpOnly: true, secure: false }); // Set secure: true if using HTTPS

    // Redirect to a dashboard or home page after successful sign-in
    res.redirect('/dashboard');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
