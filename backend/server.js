import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
