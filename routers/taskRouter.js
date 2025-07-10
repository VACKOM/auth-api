import express from 'express';
import auth from '../middleware/auth.js'
import {
  createTask,
  getTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const taskRouter = express.Router();


// Routes
taskRouter.post('/', auth, createTask);
taskRouter.get('/', auth, getTask);
taskRouter.put('/:id', auth, updateTask);
taskRouter.delete('/:id', auth, deleteTask);

export default taskRouter;
