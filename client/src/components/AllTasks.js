import React, { useContext, useEffect } from 'react';
import TaskComponent from './TaskComponent';
import { TasksContext } from '../context/tasksContext';
import axios from 'axios';
import './allTasks.css';

const AllTasks = () => {

    const { loading, allTasks, tasksDispatch } = useContext(TasksContext);

    useEffect(() => {
    
        const fetchTasks = async() => {
    
            try {
                tasksDispatch({ type: "TASKS_START" });
                const { data } = await axios.get('/all');
                tasksDispatch({ type: "TASKS_SUCCESS", payload: data });
                
            } catch (error) {
                tasksDispatch({ type: "TASKS_FAIL", payload: error });
                console.log(error)
            }
        }

        fetchTasks();

    }, [tasksDispatch]);




  return (
    <>
    <h2 className='all_header'>All Tasks</h2>
    <div className='all_main'>
        {loading ? <p>Loading Tasks... </p> : null}
        {allTasks ? allTasks.map((task) => (
            <TaskComponent key={task._id} taskP={task} />   
        )) : (<p>Loading tasks...</p>)}
    
    </div>
    </>
  )
}

export default AllTasks