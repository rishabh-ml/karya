import Task from '../models/Task.js';

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Public
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  
  const newTask = new Task({
    title,
    description,
    status,
    priority,
    dueDate
  });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  const updatedTask = {
    title,
    description,
    status,
    priority,
    dueDate,
    _id: id
  };

  await Task.findByIdAndUpdate(id, updatedTask, { new: true });
  res.json(updatedTask);
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  await Task.findByIdAndRemove(id);
  res.json({ message: 'Task deleted successfully.' });
};

export {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
