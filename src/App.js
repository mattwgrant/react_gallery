import React from 'react';
import './App.css';
import './index.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
    </div>
  );
}

export default App;
