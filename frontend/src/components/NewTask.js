import axios from 'axios';
import React, { useState } from 'react';
import './newTask.css';

const NewTask = () => {
    const [newTask, setNewTask] = useState({ title: '', desc: '', date: '' });


    const handleTitleChange = (e) => {
        setNewTask({ ...newTask, title: e.target.value });
    };

    const handleDescChange = (e) => {
        setNewTask({ ...newTask, desc: e.target.value });
    };

    const handleDateChange = (e) => {
        setNewTask({ ...newTask, date: e.target.value });
    };

    const handleSubmit = async(e) => {

        try {
            const { data } = await axios.post('/create', newTask);
            console.log(data);

        } catch(error) {
            console.log(error)
        }

    }


  return (
    <form className='new_form' onSubmit={handleSubmit}>
        <label htmlFor='title' className='new_label'>Title</label>
        <input id="title" className='new_input' type="text" value={newTask.title} placeholder='Add Task' onChange={handleTitleChange} required />

        <label htmlFor='desc' className='new_label'>Description</label>
        <textarea id="desc" className='new_input' type="text" value={newTask.desc} placeholder='Add Description' onChange={handleDescChange} required />

        <label htmlFor='date' className='new_label'>Due Date</label>
        <input type="date" className='new_input_date' value={newTask.date} onChange={handleDateChange} required/>

        <button type='submit' className='new_submit'>Create</button>

    </form>
  )
}

export default NewTask