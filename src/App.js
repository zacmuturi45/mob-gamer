import logo from './logo.svg';
import { ReactDOM } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Login from './Login';
import './App.css';

function App() {
  return (
<div className='flex-container'>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
  </Routes>
</div>
  );
}

export default App;
