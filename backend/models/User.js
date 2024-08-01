// models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  address: {
    type: String, 
    required: true
  },
  phoneNumber: {
    type: String, 
    required: true
  },
  dateOfBirth: {
    type: Date, 
    required: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Hash the password before saving the user
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create and export the model
module.exports = mongoose.model('User', userSchema);
