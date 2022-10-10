import React from 'react';
// import css from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitArticle from './pages/View/SubmitArticle';
// import Table from './components/Table';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/SubmitArticle" element={<SubmitArticle />} />
        <Route exact path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
