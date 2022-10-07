import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import View from './pages/View/View';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/view' exact element={<View/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
