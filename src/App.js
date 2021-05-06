import React from 'react';
import './App.css';
import './index.css';
import './config.js';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoContainer />

      <Switch>
        <Route path="" component={} />
        <Route path="" component={} />
        <Route path="" component={} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
