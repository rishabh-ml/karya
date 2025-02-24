import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password
  });

  if (user) {
    const token = generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export { signup, login };
