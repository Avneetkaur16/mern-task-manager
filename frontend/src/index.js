import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TasksContextProvider } from './context/tasksContext';
import { TaskContextProvider } from './context/taskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TasksContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </TasksContextProvider>
  </React.StrictMode>
);


