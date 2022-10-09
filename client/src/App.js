import React from 'react';
// import css from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
// import Table from './components/Table';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
