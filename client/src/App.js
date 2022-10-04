import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Table from './components/Table';
import HomeView from './pages/View/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
