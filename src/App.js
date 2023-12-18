import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className='App'>
      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
