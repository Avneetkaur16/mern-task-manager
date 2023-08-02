import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiTrash } from 'react-icons/bi';
import './taskComponent.css';


const TaskComponent = ({ taskP }) => {

  const navigate = useNavigate();

  const [task, setTask] = useState({ title: taskP.title, desc: taskP.desc, date: taskP.date, done: taskP.done });
  const [done, setDone] = useState(taskP.done);
  

  const handleDelete = async() => {
    try {
      await axios.delete(`/api/task/${taskP._id}`)
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheck = async(e) => {
    
    try {
      const { data } = await axios.put(`/api/task/check/${taskP._id}`, { done: done ? false : true });

      setTask(data)
      console.log(task);
      setDone((prev) => !prev);

    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className='task_main'>
      
      <input className='task_check' type='checkbox' checked={task?.done} onChange={handleCheck} />
      <Link className='task_link' to={`/task/${taskP?._id}`}>
          <p className={task?.done ? 'task_text_overline' : 'task_text'}>{task?.title}</p>
          <p className='task_text'>{(task?.date).toString().slice(0, 10)}</p>
          <BiTrash className='task_button' onClick={handleDelete}>Delete</BiTrash>
      </Link>
    </div>
  )
}

export default TaskComponent