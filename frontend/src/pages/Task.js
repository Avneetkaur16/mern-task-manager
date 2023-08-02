import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/taskContext';
import './task.css';

const Task = () => {
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState({ title: '', desc: '' });
  const { task, taskDispatch, error } = useContext(TaskContext);

  const [flag, setFlag] = useState(false);


  useEffect(() => {
    const fetchTask = async() => {
      try {
        taskDispatch({ type: "TASK_START" });
        const { data } = await axios.get(`/task/${id}`);
        taskDispatch({ type: "TASK_SUCCESS", payload: data });
        setUpdateTask(data);
        
      } catch (error) {
        taskDispatch({ type: "TASK_FAIL", payload: error });
        console.log(error);
      }
    }

    fetchTask();

  }, [id, taskDispatch]);

  const handleEdit = () => {
    setFlag((prev) => !prev);

  }

  const handleChange = (e) => {
    setUpdateTask({ ...updateTask, [e.target.name]: e.target.value });
  }

  const handleSave = async() => {
    try {
      const { data } = await axios.put(`/task/${task?._id}`, updateTask);
      setFlag((prev) => !prev)
      taskDispatch({ type: "TASK_SUCCESS", payload: data });
      

    } catch (error) {
      taskDispatch({ type: "TASK_FAIL", payload: error })
      console.log(error)
    }
  }


  return (
    <>
    <h1 className='task_header'>Edit Task</h1>
  
    <div className='task_main_page'>
      
      {flag ? <input className='task_input' type='text' name='title' value={updateTask?.title} onChange={handleChange} autoFocus /> : <h3 className='task_name'>{task?.title}</h3>}
      {flag ? <input className='task_input' type='text' name='desc' value={updateTask?.desc} onChange={handleChange} autoFocus /> : <p className='task_desc'>{task?.desc}</p>}
      {flag ? <input className='task_input_date' type='date' name='date' value={updateTask?.date} onChange={handleChange} /> 
        : <p className='task_date'>{task?.date ? task?.date.toString().slice(0, 10) : ''}</p>
      }
      

      <button className='task_edit' onClick={handleEdit}>{flag ? 'Return' : 'Edit'}</button>
      {flag ? <button className='task_save' onClick={handleSave}>Save</button> : null}

      {error ? (<p className='task_error'>{error?.response?.data?.errors[0]?.msg}</p>) : null}
    </div>

    </>
    
    
  )
}

export default Task