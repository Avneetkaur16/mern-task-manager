import React from 'react'
import NewTask from '../components/NewTask';
import AllTasks from '../components/AllTasks';
import './home.css';

const Home = () => {
  return (
    <div>
      <header><h1 className='home_header'>Task Management</h1></header>
      
      <main className='main'>
        <NewTask />
        <AllTasks />
      </main>

      <footer className='home_footer'>
        <p>Created by Avneet Kaur</p>
      </footer>
    </div>
  )
}

export default Home