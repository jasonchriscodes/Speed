import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewPage from './pages/View/ViewPage';
import SubmitArticle from './pages/View/SubmitArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ViewPage />} />
        <Route exact path="/SubmitArticle" element={<SubmitArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
