import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitArticle from './pages/View/SubmitArticle';
// import Table from './components/Table';
import HomeView from './pages/View/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/SubmitArticle" element={<SubmitArticle />} />
        <Route exact path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
