import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { validateSignup, validateLogin } from '../middleware/authValidation.js';

const router = express.Router();

// Signup route
router.post('/signup', validateSignup, signup);

// Login route
router.post('/login', validateLogin, login);

export default router;
