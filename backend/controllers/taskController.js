import Task from '../models/Task.js';

export const createTask = async(req, res) => {

    const { title, desc, date } = req.body;

    try {
        const newTask = new Task({ title: title, desc: desc, date: date });
        await newTask.save();

        res.status(201).json(newTask);

    } catch (error) {
        res.status(500).json(error);
    }

};

export const updateTask = async(req, res) => {
    
    const { id } = req.params;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id,
            { $set: req.body },
            { new: true }            
        );

        res.status(200).json(updatedTask);

    } catch (error) {
        res.status(500).json(error);
    }

};

export const checkTask = async(req, res) => {
    const { id } = req.params;

    try {
        const checkedTask  = await Task.findByIdAndUpdate(id,
            { $set: req.body },
            { new: true }    
        );

        res.status(200).json(checkedTask);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteTask = async(req, res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task Deleted' });

    } catch (error) {
        res.status(500).json(error);
    }

};

export const getTask = async(req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        res.status(200).json(task);

    } catch (error) {
        res.status(500).json(error);
    }

};

export const getAllTasks = async(req, res) => {

    try {
        const allTasks = await Task.find({});
        res.status(200).json(allTasks);


    } catch (error) {
        res.status(500).json(error);
    }

};