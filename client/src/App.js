import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
