import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Task from './pages/Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task/:id' element={<Task />} />
        {/* Add error page too */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
