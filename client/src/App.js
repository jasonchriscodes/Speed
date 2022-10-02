import React from 'react';
// import css from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ViewPage from "./pages/View/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={ViewPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;