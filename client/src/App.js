import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/View/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
