import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Project from './Component/Project';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
