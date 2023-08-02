import express from 'express';
import { check } from 'express-validator';
import { createTask, updateTask, deleteTask, getTask, getAllTasks, checkTask } from '../controllers/taskController.js';
import { validator } from '../utils/validate.js';

const router = express.Router();

// CREATE TASK 
router.post('/create', [
    check('title', 'Title is required').isLength({ min: 3, max: 50 }), 
    check('desc', 'Description is required').isLength({ min: 5, max: 500 }),
    ], 
validator, createTask);

// UPDATE TASK
router.put('/task/:id', [
    check('title', 'Title is required').isLength({ min: 3, max: 50 }), 
    check('desc', 'Description is required').isLength({ min: 5, max: 500 }),
], 
validator, updateTask);

// CHECK TASK
router.put('/task/check/:id', checkTask);

// DELETE TASK
router.delete('/task/:id', deleteTask);

// GET A TASK
router.get('/task/:id', getTask);

// GET ALL TASKS
router.get('/all', getAllTasks);

export default router;