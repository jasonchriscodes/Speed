import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewPage from './pages/View/ViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
