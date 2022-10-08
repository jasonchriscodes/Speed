import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Table from './components/Table';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
