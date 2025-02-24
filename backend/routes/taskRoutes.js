import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

// Task routes
router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;
