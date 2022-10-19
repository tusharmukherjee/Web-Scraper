import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Homesearch from './components/Homesearch';
import Zomnav from './components/Zomnav';
import Presaved from './components/Presaved';
import Showtable from './components/Showtable';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Zomnav />}>
          <Route path='' element={<><Home /></>} />
          <Route path='/search' element={<><Homesearch /></>} />
          <Route path='/dashboard/:key' element={<Dashboard />} />
          <Route path='/saved' element={<Presaved />} />
          <Route path='/test' element={<Showtable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
